import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, IconButton, Toolbar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ContactMailIcon from '@mui/icons-material/ContactMail';

import { Link } from '~/components/Shared/Link';


interface LinkProps {
    path: string;
    icon: ReactNode;
    label: string;
}

export const Header = () => {

    const navigate = useNavigate();

    const links: LinkProps[] = [
        {
            path: '/',
            icon: <HomeIcon />,
            label: 'Home'
        },
        {
            path: '/cart',
            icon: <ShoppingCartIcon />,
            label: 'Cart'
        },
        {
            path: '/contact',
            icon: <ContactMailIcon />,
            label: 'Contact'
        }
    ];

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
                    {
                        links && links.map((link: LinkProps) => (
                            <Button
                                key={link.path}
                                startIcon={link.icon}
                                sx={{ color: 'white', textTransform: 'capitalize' }}
                                onClick={() => navigate(link.path)}
                            >
                                {link.label}
                            </Button>
                        ))
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}