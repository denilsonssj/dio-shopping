import {  Route } from 'react-router-dom';
import { MainLayout } from '~/components/Layouts/Main';

import { Home } from './Home';

export const Public = () => {
    return (
        <MainLayout>
            <Route path='/' element={<Home />} />
        </MainLayout>
    );
}