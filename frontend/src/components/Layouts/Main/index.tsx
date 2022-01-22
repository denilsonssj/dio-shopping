import { Fragment, ReactNode } from 'react';
import { Routes } from 'react-router';

import { Header } from './components/Header';

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <Fragment>
            <Header />
            <Routes>
                {children}
            </Routes>
        </Fragment>
    );
}