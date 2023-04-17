// MUI with a create job form component
// Path: src\Component\Job\index.jsx
import { React } from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import CreateUserForm from '../../../../Component/CreateUserForm';

export default function CreateUser() {

    return (
        <>
            <Container maxWidth="md">
                <Typography variant="h5" component="h5" gutterBottom sx={{ py: 2 }}>
                    <br />
                    Create New User
                </Typography>
                <Box sx={{ flexGrow: 1, pb: 5 }}>
                    <CreateUserForm />
                </Box>
            </Container>
        </>
    );
}