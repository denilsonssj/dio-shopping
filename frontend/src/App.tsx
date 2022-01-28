import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Pages } from '~/components/Pages';
import { theme } from '~/styles/theme';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Pages />
        </ThemeProvider>
    );
}