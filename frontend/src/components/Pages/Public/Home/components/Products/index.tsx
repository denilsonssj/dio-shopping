import { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';

import { api } from '~/services/api';
import { IProduct } from '~/interfaces/Product';
import { API_URL } from '~/settings';
import { Product } from '../Product';

export const Products = () => {

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await api.get(`${API_URL}/products`);
            setProducts(data);
        }
        fetchData();
    }, []);

    return (
        <Container sx={{ marginTop: 8 }}>
            <Grid container spacing={6}>
                {
                    products && products.length > 0 ? (
                        products.map(({ id, title, category, description, price, imageUrl, rating }: IProduct) => (
                            <Grid item key={id} xs={12} sm={6} lg={4} xl={3}>
                                <Product
                                    id={id}
                                    title={title}
                                    category={category}
                                    description={description}
                                    price={price}
                                    imageUrl={imageUrl}
                                    rating={rating}
                                />
                            </Grid>
                        ))
                    )
                    : 
                    (<div>Não há produtos</div>)
                }
            </Grid>
        </Container>
    );
}