import {
    Button,
    Typography,
    Grid,
    Paper,
    Rating
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { IProduct } from '~/interfaces/Product';
import { formatNumberToCurrency } from '~/utils/formatNumberToCurrency';
import { ToastAnimated, showToast, ToastStatus } from '~/components/Shared/Toast';
import { useCart } from '~/hooks/useCart';
import { Image } from './styles';

export const ProductInfo = (product: IProduct) => {

    const navigate = useNavigate();
    const { addProductIntoCart } = useCart();

    const handleClickBuyButton = () => {
        addProductIntoCart(product);
        showToast({ 
            type: ToastStatus.SUCCESS,
            message: 'Purchase made successfully!'
        });
        setTimeout(() => {
            navigate('/cart');
        }, 2000);
    }

    const handleClickAddToCartButton = () => {
        addProductIntoCart(product);
        showToast({ type: 'success', message: 'Product added to cart!' });
    }

    return (
        <Grid container spacing={8}>
            <Grid item xs={12}>
                <Typography sx={{ textAlign: 'center' }} variant="h4">{product.title}</Typography>
            </Grid>
            <Grid item xs={12} md={8} xl={8}>
                <Paper elevation={0} sx={{ display: 'flex', height: 400, width: 350, padding: 4 }}>
                    <Image src={product.imageUrl} alt={product.title}  />
                </Paper>
            </Grid>
            <Grid item xs={12} md={4} xl={4} sx={{ marginRight: 0, }}>
                <Typography variant="h3" sx={{ marginTop: 12 }}>{formatNumberToCurrency(product.price)}</Typography>
                <Typography
                    variant="body2"
                    sx={{ marginTop: 2 }}
                >
                    Installment in up to 12 installments of {formatNumberToCurrency(product.price * 1.1)} without interest on credit card
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 2 }}>1x installment on the card with up to 10% discount</Typography>
                <Typography variant="body2" sx={{ marginTop: 2 }}>In stock now! 34 availables</Typography>
                <Rating
                    name="product-rating"
                    value={product.rating}
                    readOnly
                    sx={{ marginTop: 2 }}
                />
                <ToastAnimated />
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<ShoppingCartIcon />}
                    sx={{ marginTop: 2, width: '100%' }}
                    onClick={handleClickBuyButton}
                >
                    Buy now
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    startIcon={<AddShoppingCartIcon />}
                    sx={{ marginTop: 2, width: '100%' }}
                    onClick={handleClickAddToCartButton}
                >
                    Add to cart
                </Button>
            </Grid>
        </Grid>
    );
} 