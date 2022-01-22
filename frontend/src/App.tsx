import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider as ReduxProvider } from 'react-redux';

import { Pages } from '~/components/Pages';
import { theme } from '~/styles/theme';
import { store } from '~/store';

export const App = () => {
    return (
        <ReduxProvider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Pages />
            </ThemeProvider>
        </ReduxProvider>
    );
}