import { useContext, React, useEffect } from 'react'
import { AuthContext } from '../../../Context/authContext';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

export default function AdminDashboard() {
  const authContext = useContext(AuthContext);
  const { auth } = authContext;
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate('/');
    }
  }, [auth, navigate]);
  return (
    <>
      <Container sx={{ py: 4 }} maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          
          <p>Corporate</p>
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => {
              navigate('/corporate/addjob')
            }}>Add a job</Button>
          </Stack>
          <br/>
          <p>Admin</p>
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => {
              navigate('/admin/user/create')
            }}>Create a user</Button>
          </Stack>

        </Box>
      </Container>
    </>
  )
}