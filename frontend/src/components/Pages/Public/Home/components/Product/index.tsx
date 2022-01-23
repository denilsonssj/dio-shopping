import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';

import { IProduct } from '~/interfaces/Product';

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
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                    }}
                >
                    {product.title}
                </Typography>
                <Typography>{product.category}</Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        //WebkitLineClamp: 4,
                    }}
                >
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}