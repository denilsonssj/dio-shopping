import { useContext } from 'react'

import { CartContext } from '~/contexts/CartContext';

export const useCart = () => {
    const cartContext = useContext(CartContext);
    if(!cartContext) {
        throw new Error('Cart context not loaded!');
    }
    return cartContext;
}