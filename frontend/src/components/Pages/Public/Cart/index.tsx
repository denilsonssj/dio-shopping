import { Container, Box } from '@mui/material';

import { useCart } from '~/hooks/useCart';
import { CartItems } from './components/CartItems';

export const CartPage = () => {

    const { cartItems } = useCart();

    return (
        <Container sx={{ marginTop: 4 }}>
            {
                cartItems ? (<CartItems />) : (<Box>No products in the cart.</Box>)
            }
        </Container>
    );
}
