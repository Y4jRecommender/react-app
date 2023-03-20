import { useContext, React, useEffect } from 'react'
import { AuthContext } from '../../../Context/authContext';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { SectionContext } from '../../../Context/sectionContext';
import AddJob from '../AddJob';
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
              <p>Job Settings</p>
              <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => {
                  setSection('createJobCorporate')
                }}>Create a job</Button>
                <Button variant="contained" onClick={() => {
                  setSection('allJobByCorporate')
                }}>All Job Added</Button>
              </Stack>
            </Box>
          </Container>
        </>)}

        {/* Add job */}
        {section === "createJobCorporate" && (
          <>
          <AddJob/>
          </>
        )}
    </>
  )
}