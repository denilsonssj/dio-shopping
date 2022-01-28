import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { CartProvider } from '~/contexts/CartContext';
import { Pages } from '~/components/Pages';
import { theme } from '~/styles/theme';

export const App = () => {
    return (
        <CartProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Pages />
            </ThemeProvider>
        </CartProvider>
    );
}