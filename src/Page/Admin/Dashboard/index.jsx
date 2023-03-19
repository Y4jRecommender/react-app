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
          <p>User Settings</p>
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => {
              navigate('/admin/user/create')
            }}>Create a user</Button>
          </Stack>
          <br />
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => {
              navigate('/admin/user/all')
            }}>All User</Button>
          </Stack>
        </Box>
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <p>Job Settings</p>
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => {
              navigate('/admin/job/all')
            }}>All Job</Button>
          </Stack>
          <br />
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => {
              navigate('/admin/user/create')
            }}>Create a Job</Button>
          </Stack>
        </Box>
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <p>Corporate Settings</p>
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => {
              navigate('/admin/user/create')
            }}>Create a Corporate</Button>
          </Stack>
          <br />
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => {
              navigate('/admin/corporate/create')
            }}>All Corporate</Button>
          </Stack>
        </Box>
      </Container>
    </>
  )
}