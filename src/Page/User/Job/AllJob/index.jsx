import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../Context/authContext";
import { Container, Box, Button, Typography } from "@mui/material";
import { getAllJobs } from "../../../../API/job";
import { Stack } from "@mui/system";
import JobModal from "../../../../Component/JobModal";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function AllJobUser() {
    const [jobs, setJobs] = useState([]);
    const authContext = useContext(AuthContext);
    const { languageId } = authContext;

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
            <Container maxWidth="xl">
                <Typography variant="h5" component="h5" gutterBottom sx={{ py: 2 }}>
                    <br />
                    All Jobs
                </Typography>
                <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Job ID</TableCell>
                                    <TableCell>Job Title</TableCell>
                                    <TableCell>Job Location</TableCell>
                                    <TableCell>Company Name</TableCell>
                                    <TableCell>Company Id</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {jobs.map((job) => (
                                    <TableRow
                                        key={job._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {job._id}
                                        </TableCell>
                                        <TableCell>{job.jobDescription[languageId].jobTitle}</TableCell>
                                        <TableCell>{job.jobDescription[languageId].jobLocation}</TableCell>
                                        <TableCell>{job.jobDescription[languageId].companyName}</TableCell>
                                        <TableCell>{job.companyId}</TableCell>
                                        <TableCell>
                                            <Stack spacing={1} direction="row">
                                                <JobModal job={job} />
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <br />
            </Container>
        </>
    );
}