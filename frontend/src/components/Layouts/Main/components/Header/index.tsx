import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from '~/components/Shared/Link';

export const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/">
                            DIO Shopping
                        </Link>
                    </Box>
                    <Link to="/">Home</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/contact">Contact</Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}