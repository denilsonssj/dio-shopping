import { Box, Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { IProduct } from '~/interfaces/Product';
import { api } from '~/services/api';
import { ProductInfo } from './components/ProductInfo';
import { RelatedProducts } from './components/RelatedProducts';

export const ProductPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState<IProduct | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await api.get(`/products/${id}`);
            setProduct(data);
        };
        fetchData();
    }, [id]);

    return (
        <Container maxWidth="xl">
            <Box sx={{ marginTop: 8 }}>
                {
                    product && (
                        <Container>
                            <ProductInfo
                                id={product.id}
                                title={product.title}
                                category={product.category}
                                imageUrl={product.imageUrl}
                                rating={product.rating}
                                price={product.price}
                                description={product.description}
                            />
                        </Container>
                    )
                }
            </Box>
            { product && (<RelatedProducts id={product.id} category={product.category} />)}
        </Container>
    );
} 