import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Product = () => {
    const { id } = useParams();

    useEffect(() => {
        if(!id) {
            console.log('Product not found');
        }
    }, []);
    return <div>{id}</div>
} 