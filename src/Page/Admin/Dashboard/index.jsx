import { useContext, React, useEffect } from 'react'
import { AuthContext } from '../../../Context/authContext';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { SectionContext } from '../../../Context/sectionContext';
import CreateUser from '../User/CreateUser';
import DeleteUser from '../User/DeleteUser';
import AllUserAdmin from '../User/AllUser';
import AllJobAdmin from '../Job/AllJob';
import CreateCorporate from '../Corporate/CreateCorporate';
import AllCorporateAdmin from '../Corporate/AllCorporate';

export default function AdminDashboard() {
  const authContext = useContext(AuthContext);
  const { auth } = authContext;
  const navigate = useNavigate();
  const { section, setSection } = useContext(SectionContext);
  useEffect(() => {
    if (!auth) {
      navigate('/');
    }
  }, [auth, navigate]);
  return (
    <>
      {section === "home" && (
        <>
          <Container sx={{ py: 4 }} maxWidth="xl">
            <Box sx={{ flexGrow: 1 }}>
              <p>User Settings</p>
              <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => {
                  setSection('createUserAdmin');
                }}>Create a user</Button>
                <Button variant="contained" onClick={() => {
                  setSection('allUserAdmin');
                }}>All user</Button>
                <Button variant="contained" onClick={() => {
                  setSection('deleteUserAdmin');
                }}>Delete a user</Button>
              </Stack>
            </Box>
            <br />
            <Box sx={{ flexGrow: 1 }}>
              <p>Job Settings</p>
              <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => {
                  setSection('allJobAdmin')
                }}>All Job</Button>
              </Stack>
              <br />
            </Box>
            <br />
            <Box sx={{ flexGrow: 1 }}>
              <p>Corporate Settings</p>
              <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => {
                  setSection('createCorporateAdmin')
                }}>Create a Corporate</Button>
                <Button variant="contained" onClick={() => {
                  setSection('allCorporateAdmin')
                }}>All Corporate</Button>
              </Stack>
            </Box>
          </Container>
        </>)}

      {/* Create a user */}
      {section === "createUserAdmin" && (
        <>
          <CreateUser />
        </>
      )}

      {/* delete a user */}
      {section === "deleteUserAdmin" && (
        <>
          <DeleteUser />
        </>
      )}

      {/* all user admin */}
      {section === "allUserAdmin" && (
        <>
          <AllUserAdmin />
        </>
      )}

      {/* all job admin */}
      {section === "allJobAdmin" && (
        <>
          <AllJobAdmin />
        </>
      )}

      {/* create corporate admin */}
      {section === "createCorporateAdmin" && (
        <>
          <CreateCorporate />
        </>
      )}

      {/* all corporate admin */}
      {section === "allCorporateAdmin" && (
        <>
          <AllCorporateAdmin />
        </>
      )}
    </>
  )
}