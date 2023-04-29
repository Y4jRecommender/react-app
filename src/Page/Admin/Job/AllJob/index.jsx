import React, { useState, useEffect } from "react";
import { Button, Container, Box, Typography } from "@mui/material";
import { deleteJob, getAllJobs } from "../../../../API/job";
import JobModalAdmin from "../JobModel";
import { Stack } from "@mui/system";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function AllJobAdmin() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        // call the api to get all the jobs
        const result = getAllJobs();
        result.then((res) => {
            setJobs(res.jobs);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleDelete = (id) => {
        const result = deleteJob(id);
        result.then((res) => {
            if (res.status === 200) {
                alert("Job Deleted");
                setJobs(jobs.filter((job) => job._id !== id));
            } else {
                alert("Something went wrong");
            }
        });
    };
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
                                    <TableCell>Job Id</TableCell>
                                    <TableCell>Job Title</TableCell>
                                    <TableCell>Company Id</TableCell>
                                    <TableCell>Company Name</TableCell>
                                    <TableCell>Job Location</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {jobs.length === 0 && (
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" colSpan={6}>
                                            No Jobs Found
                                        </TableCell>
                                    </TableRow>
                                )}

                                {jobs?.map((job) => (
                                    <TableRow
                                        key={job.__id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {job._id}
                                        </TableCell>
                                        <TableCell>{job.jobTitle}</TableCell>
                                        <TableCell>{job.companyId}</TableCell>
                                        <TableCell>{job.companyName}</TableCell>
                                        <TableCell>{job.jobLocation}</TableCell>
                                        <TableCell>
                                            <Stack spacing={1} direction="row">
                                                <Button
                                                    variant="contained"
                                                    onClick={() => {
                                                        handleDelete(job._id);
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                                <JobModalAdmin
                                                    job={job}
                                                />
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