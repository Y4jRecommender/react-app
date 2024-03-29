import { useContext, React, useEffect } from 'react'
import { AuthContext } from '../../../Context/authContext';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import { SectionContext } from '../../../Context/sectionContext';
import AddJob from '../AddJob';
import AllJobCorporate from '../AllJob';
import CorporateProfile from '../Profile';

export default function CorporateDashboard() {
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
              <Typography variant="h6" component="h6" gutterBottom sx={{ pt: 2 }}>
                User Settings
              </Typography>
              <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => {
                  setSection('createJobCorporate')
                }}>Create a job</Button>
                <Button variant="contained" onClick={() => {
                  setSection('allJobByCorporate')
                }}>All Job Added</Button>
              </Stack>
            </Box>
            <br />
            <Box sx={{ flexGrow: 1 }}>

              <Typography variant="h6" component="h6" gutterBottom sx={{ pt: 2 }}>
                Profile Settings
              </Typography>
              <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => {
                  setSection('profile')
                }}>Edit Profile</Button>
              </Stack>
            </Box>
          </Container>
        </>)}

      {/* Add job */}
      {section === "createJobCorporate" && (
        <>
          <AddJob />
        </>
      )}

      {/* All job */}
      {section === "allJobByCorporate" && (
        <>
          <AllJobCorporate />
        </>
      )}

      {/* Edit Profile */}
      {section === "profile" && (
        <>
          <CorporateProfile />
        </>
      )}

    </>
  )
}