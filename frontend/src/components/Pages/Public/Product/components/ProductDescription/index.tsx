import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface ProductDescriptionProps {
    title: string;
    description: string;
}

export const ProductDescription = ({ title, description }: ProductDescriptionProps) => {
    return (
        <Box>
            <Paper elevation={1} sx={{ px: 4, py: 2 }}>
                <Typography variant="h4" sx={{ pb: 2 }}>Product description</Typography>
                <Typography variant="body1" sx={{ pb: 2, fontWeight: 500 }}>{title}</Typography>
                <Typography variant="body1">{description}</Typography>
            </Paper>
        </Box>
    );
}