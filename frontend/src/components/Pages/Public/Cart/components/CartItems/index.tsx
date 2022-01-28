import { Fragment } from 'react';
import { Grid, Typography,Paper, Button } from '@mui/material';
import { Box } from '@mui/system';

import { CartItem } from '~/contexts/CartContext';
import { useCart } from '~/hooks/useCart';
import { formatNumberToCurrency } from '~/utils/formatNumberToCurrency';
import { ToastAnimated, showToast, ToastStatus } from '~/components/Shared/Toast';
import { Image } from './styles';

export const CartItems = () => {

    const { cartItems } = useCart();
    const totalPrice: number = cartItems.reduce((acumulator: number, current: CartItem) => {
        const result: number = current.quantity * current.product.price;
        return acumulator + result
    }, 0);

    const handleClickBuyButton = () => {
        showToast({
            type: ToastStatus.SUCCESS,
            message: 'Purchase successfull!'
        });
        // clear cart
    }

    return (
        <Box>
            <Fragment>
                {
                    cartItems && (
                        <Grid container sx={{ marginBottom: 4 }}>
                            <Grid item md={3} xl={3}>
                                <Typography variant="h6" sx={{ textAlign: 'center' }}>Image</Typography>
                            </Grid>
                            <Grid item md={3} xl={3}>
                                <Typography variant="h6" sx={{ textAlign: 'center' }}>Title</Typography>
                            </Grid>
                            <Grid item md={3} xl={3}>
                                <Typography variant="h6" sx={{ textAlign: 'center' }}>Quantity</Typography>
                            </Grid>
                            <Grid item md={3} xl={3}>
                                <Typography variant="h6" sx={{ textAlign: 'center' }}>Price</Typography>
                            </Grid>
                        </Grid>
                    )
                }
            </Fragment>
            {
                cartItems.map((cartItem: CartItem) => (
                    <Paper elevation={1} key={cartItem.product.id}>
                    <Grid
                        container
                        key={cartItem.product.id}
                        sx={{ marginBottom: 4 }}
                    >
                        <Grid item md={3} xl={3}>
                            <Image
                                src={cartItem.product.imageUrl}
                                alt={cartItem.product.title}
                                width={150}
                                height={200}
                            />
                        </Grid>
                        <Grid item md={3} xl={3} sx={{ alignSelf: 'center' }}>
                            <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: 500 }}>{cartItem.product.title}</Typography>
                        </Grid>
                        <Grid item md={3} xl={3} sx={{ alignSelf: 'center' }}>
                            <Typography variant="body1" sx={{ textAlign: 'center' }}>
                                {cartItem.quantity}
                            </Typography>
                        </Grid>
                        <Grid item md={3} xl={3} sx={{ alignSelf: 'center' }}>
                            <Typography variant="body1" sx={{ textAlign: 'center' }}>
                                {formatNumberToCurrency(cartItem.product.price)}
                            </Typography>
                        </Grid>
                    </Grid>
                    </Paper>
                ))
            }
            <Paper sx={{ padding: 4, display: 'flex', justifyContent: 'end' }}>
                <Box>
                    <Typography variant="h5" sx={{ marginBottom: 2 }}>Total: {formatNumberToCurrency(totalPrice)}</Typography>
                    <ToastAnimated />
                    <Button
                        variant="contained"
                        onClick={handleClickBuyButton}
                    >
                        Close purchase
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}