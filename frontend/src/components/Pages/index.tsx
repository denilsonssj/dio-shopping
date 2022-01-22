import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Public } from './Public';

export const Pages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Public />} />
            </Routes>
        </BrowserRouter>
    );
}
