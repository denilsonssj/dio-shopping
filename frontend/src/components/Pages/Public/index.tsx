import {  Route } from 'react-router-dom';

import { MainLayout } from '~/components/Layouts/Main';
import { Home } from './Home';
import { Contact } from './Contact';

export const Public = () => {
    return (
        <MainLayout>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
        </MainLayout>
    );
}