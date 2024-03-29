import { useContext, React, useEffect, useState } from 'react'
import { AuthContext } from '../../../Context/authContext';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { SectionContext } from '../../../Context/sectionContext';
import AllJobUser from '../Job/AllJob';
import ProfilePage from '../Profile';

import { getAllJobs } from '../../../API/job';
import JobModalUser from '../Job/JobModel';
import JobModal from '../../../Component/JobModal';

export default function Dashboard() {
  const authContext = useContext(AuthContext);
  const { auth, languageId } = authContext;
  const navigate = useNavigate();
  const { section, setSection } = useContext(SectionContext);
  const [jobs, setJobs] = useState([]);

  // convert 2021-03-20T11:30:05.000Z to dd/mm/yy format
  const convertDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    if (!auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  useEffect(() => {
    // call the api to get all the jobs
    const result = getAllJobs();
    result.then((res) => {
      setJobs(res.jobs);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* If the section is home */}
      {section === "home" && (
        <Container sx={{ py: 4 }} maxWidth="xl">
          <Typography variant="h5" component="h5" gutterBottom sx={{ py: 2 }}>
            <br />
            Recommended Jobs
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

              {/* Show the job in form of cards */}
              {jobs.map((job) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 250 }}>
                    <h3>{job.jobDescription[languageId].jobTitle}</h3>
                    <p>
                      Location: {job.jobDescription[languageId].jobLocation}<br />
                      Company Name: {job.jobDescription[languageId].companyName}<br />
                      Company Id:{job.companyId} <br />
                      Last date to apply: {convertDate(job.endDate)}
                    </p>
                    <JobModal job={job} />
                  </Paper>
                </Grid>
              ))}

              <Grid item xs={12} sm={6} md={12}>
                <Button variant="contained" onClick={() => {
                  setSection('allJobUser');
                }}>All Jobs</Button>
              </Grid>

            </Grid>
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