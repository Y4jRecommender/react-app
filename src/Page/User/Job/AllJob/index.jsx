import React, { useState, useEffect } from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import { getAllJobs } from "../../../../API/job";
import { Stack } from "@mui/system";
import JobModalUser from "../JobModel";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function AllJobUser() {
    const [jobs, setJobs] = useState([]);
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
                                        key={job.__id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {job._id}
                                        </TableCell>
                                        <TableCell>{job.jobTitle}</TableCell>
                                        <TableCell>{job.jobLocation}</TableCell>
                                        <TableCell>{job.companyName}</TableCell>
                                        <TableCell>{job.companyID}</TableCell>
                                        <TableCell>
                                            <Stack spacing={1} direction="row">
                                                <JobModalUser job={job} />
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