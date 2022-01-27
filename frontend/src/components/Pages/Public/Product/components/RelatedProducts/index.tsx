import { useState, useEffect } from 'react';
import { Typography, Paper, Button } from '@mui/material';
import { Box } from '@mui/system';
import Tooltip from '@mui/material/Tooltip';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';

import { api } from '~/services/api';
import { IProduct } from '~/interfaces/Product';
import { Image } from './styles';
import { formatNumberToCurrency } from '~/utils/formatNumberToCurrency';

interface RelatedProductsProps {
    category: string;
    id: string;
}

export const RelatedProducts = ({ category, id }: RelatedProductsProps) => {

    const navigate = useNavigate();

    const [products, setProducts] = useState<IProduct[]>([]);
    const redirectToProductPage = (path: string) => {
        navigate(path);
        window.scrollTo(0, 0);
    }

    const responsive = {
        xxl: {
            breakpoint: { max: 4000, min: 3200 },
            items: 5
        },
        xl: {
          // the naming can be any, depends on you.
          breakpoint: { max: 3200, min: 2600 },
          items: 6
        },
        md: {
          breakpoint: { max: 2600, min: 1024 },
          items: 4
        },
        sm: {
          breakpoint: { max: 1024, min: 500 },
          items: 2
        },
        xs: {
          breakpoint: { max: 500, min: 0 },
          items: 1
        }
      };

    useEffect(() => {
        const fetchData = async () => {
            const { data: fetchedProducts } = await api.get(`/products/category/${category}`);
            const filteredProducts = fetchedProducts.filter((product: IProduct) => product.id !== id);
            setProducts(filteredProducts);
        }
        fetchData();
    }, [category, id]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 4 }}>
            <Typography variant="h4" sx={{ marginBottom: 4 }}>Related products</Typography>
            <Carousel
                responsive={responsive}
                centerMode={false}
            >      
                {
                    products && products.map(product => (
                        <Tooltip key={product.id} title={product.title} placement="top">
                            <Button onClick={() => redirectToProductPage(`/product/${product.id}`)}>
                                <Paper
                                    key={product.id}
                                    elevation={4}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: 300,
                                        height: 400,
                                        px: 2,
                                        cursor: 'pointer',
                                    }}
                                >
                                    <Image src={product.imageUrl} alt={product.title} />
                                    <Box sx={{
                                            backgroundColor: 'text.secondary',
                                            width: 300,
                                            py: 1,
                                            position: 'absolute',
                                            bottom: 0,
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{ color: 'white', textAlign: 'center' }}
                                        >
                                            {formatNumberToCurrency(product.price)}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Button>
                        </Tooltip>
                   ))
                }
            </Carousel>
        </Box>
    );
}