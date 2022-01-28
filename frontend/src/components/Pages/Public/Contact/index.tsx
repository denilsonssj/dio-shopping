import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { ContactList } from './components/ContactList';

export const Contact = () => {
    return (
        <Container>
            <Box
                sx={{
                    marginTop: 8,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '8px'
                }}
            >
                <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>Contact</Typography>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            required
                            id="name"
                            label="Name"
                            placeholder="Type your name"
                            defaultValue=""
                            fullWidth
                        />
                    </Box>
                    <Box sx={{ mb: 2 }}> 
                        <TextField
                            required
                            id="message"
                            label="Message"
                            placeholder="Type your message"
                            defaultValue=""
                            multiline
                            minRows="4"
                            fullWidth
                        />
                    </Box>
                    <Button variant="contained">Submit</Button>
                </Box>
                <ContactList />
            </Box>
        </Container>
    );
}