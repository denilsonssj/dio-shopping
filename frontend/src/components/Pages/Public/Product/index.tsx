import { Fragment } from 'react';
import { Box, Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { IProduct } from '~/interfaces/Product';
import { api } from '~/services/api';
import { ProductDescription } from './components/ProductDescription';
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
        <Container maxWidth="xl" sx={{ marginTop: 8 }}>
            <Box sx={{ marginTop: 8 }}>
                {
                    product && (
                        <Fragment>
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
                            <RelatedProducts id={product.id} category={product.category} />
                            <ProductDescription title={product.title} description={product.description} />
                        </Fragment>
                    )
                }
            </Box>
        </Container>
    );
} 