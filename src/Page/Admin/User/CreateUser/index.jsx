// MUI with a create job form component
// Path: src\Component\Job\index.jsx
import { React } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import CreateUserForm from '../../../../Component/CreateUserForm';

export default function CreateUser() {

    return (
        <>
            <Container sx={{ py: 4 }} maxWidth="xl">
                <Box sx={{ flexGrow: 1 }}>
                    <CreateUserForm />
                </Box>
            </Container>
        </>
    );
}