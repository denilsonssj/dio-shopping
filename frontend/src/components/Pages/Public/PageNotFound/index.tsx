import { Box, Container, Typography } from '@mui/material';

import NotFoundImage from '~/assets/images/not_found.svg';
import { Image, Link } from './styles';

export const PageNotFound = () => {
    return (
        <Container sx={{ marginTop: 8 }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                }}
            >
                <Image src={NotFoundImage} alt="Not Found" />
                <Typography variant="h1" sx={{ fontWeight: '700', textAlign: 'center', marginBottom: 2 }}>404</Typography>
                <Typography variant="h5" sx={{ fontWeight: '500', textAlign: 'center', marginBottom: 2 }}>Page Not Found</Typography>
                <Link to='/'>Back to initial page</Link>
            </Box>
        </Container>
    );
}