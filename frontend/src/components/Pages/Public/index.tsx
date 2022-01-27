import {  Route } from 'react-router-dom';

import { MainLayout } from '~/components/Layouts/Main';
import { Home } from './Home';
import { Contact } from './Contact';
import { PageNotFound } from './PageNotFound';
import { ProductPage } from './Product';

export const Public = () => {
    return (
        <MainLayout>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='*' element={<PageNotFound />} />
        </MainLayout>
    );
}