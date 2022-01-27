import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';

import { IProduct } from '~/interfaces/Product';
import { formatNumberToCurrency } from '~/utils/formatNumberToCurrency';
import { Link } from './styles';

export const Product = (product: IProduct) => {
    return (
        <Card sx={{
            minHeight: 550,
            display: 'flex',
            flexDirection: 'column'
        }}>
            <CardMedia
                component="img"
                height="300"
                image={product.imageUrl}
            />
            <CardContent sx={{ maxHeight: 200, overflow: 'hidden' }}>
                <Link to={`/product/${product.id}`}>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        color="text.primary"
                        sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                        }}
                    >
                        {product.title}
                    </Typography>
                </Link>
                <Typography>{product.category}</Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                    }}
                >
                    {product.description}
                </Typography>
            </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        sx={{ textAlign: 'center' }}
                    >
                        {formatNumberToCurrency(Number(product.price))}
                    </Typography>
                </CardActions>
        </Card>
    );
}