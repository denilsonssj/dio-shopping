import { createContext, ReactNode, useState } from 'react';

import { IProduct } from '~/interfaces/Product';

export interface CartItem {
    quantity: number;
    product: IProduct;
}

export interface CartContextData {
    cartItems: CartItem[];
    getCartItemsFromCart: () => Promise<CartItem[]>;
    addProductIntoCart: (product: IProduct) => Promise<void>;
    resetCart: () => Promise<void>;
}

export interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export const CartProvider = ({ children }: CartProviderProps) => {

    const cartLocalStorageKey: string = '@dio_shopping:Cart';

    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storagedCart = localStorage.getItem(cartLocalStorageKey);
        if (storagedCart) {
            const parsedCart = JSON.parse(storagedCart);
            return parsedCart as CartItem[];
        }
        return [] as CartItem[];
    });

    const getCartItemsFromCart = async (): Promise<CartItem[]> => {
        const storagedCartItems = await localStorage.getItem(cartLocalStorageKey);
        if (storagedCartItems) {
            const parsedCartItems = JSON.parse(storagedCartItems) as CartItem[];
            setCartItems(parsedCartItems as CartItem[]);
            return parsedCartItems;
        }
        setCartItems([] as CartItem[]);
        return [] as CartItem[];
    }

    const addProductIntoCart = async (product: IProduct): Promise<void> => {
        const storagedCartItems: CartItem[] = await getCartItemsFromCart();
        const existsProduct = storagedCartItems
            .find((cartItem: CartItem) => cartItem.product.id === product.id);
        let cartItemsToPersist: CartItem[] = [];
        if (existsProduct) {
            const filteredCartItems = storagedCartItems
                .filter((cartItem: CartItem) => cartItem.product.id !== product.id);
            cartItemsToPersist = [
                ...filteredCartItems,
                {
                    ...existsProduct,
                    quantity: existsProduct.quantity + 1,
                },
            ];
        }
        else {
            cartItemsToPersist = [...storagedCartItems, { product, quantity: 1 }];  
        }
        localStorage.setItem(cartLocalStorageKey, JSON.stringify(cartItemsToPersist));
    }

    const resetCart = async () => {
        localStorage.removeItem(cartLocalStorageKey);
    }

    return (
        <CartContext.Provider value={{ cartItems, getCartItemsFromCart, addProductIntoCart, resetCart }}>
            {children}
        </CartContext.Provider>
    );
} 