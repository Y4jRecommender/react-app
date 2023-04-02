import { useContext, React, useEffect } from 'react'
import { AuthContext } from '../../../Context/authContext';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { SectionContext } from '../../../Context/sectionContext';
import AllJobUser from '../Job/AllJob';
import ProfilePage from '../Profile';

export default function Dashboard() {
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

      {/* If the section is home */}
      {section === "home" && (
        <Container sx={{ py: 4 }} maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>

            <p>Jobs</p>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={() => {
                setSection('allJobUser');
              }}>All Jobs</Button>
              <Button variant="contained" onClick={() => {
                setSection('profile');
              }}>My Profile</Button>
            </Stack>
          </Box>
        </Container>
      )}

      {/* If the section is allJobUser */}
      {section === "allJobUser" && (
        <AllJobUser />
      )}

      {/* my profile */}
      {section === "profile" && (
        <ProfilePage />
      )}
    </>
  )
}