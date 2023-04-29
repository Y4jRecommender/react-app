import React, { useState, useEffect, useContext } from "react";
import { Button, Container, Box, Typography } from "@mui/material";
import { getAllJobs } from "../../../API/corporate";
import { deleteJob } from "../../../API/job";
import { AuthContext } from "../../../Context/authContext";
import JobModelCorporate from "../JobModel";
import { Stack } from "@mui/system";
import JobModalCorporate from "../JobModel";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function AllJobCorporate() {
    const [jobs, setJobs] = useState([]);
    const { id } = useContext(AuthContext);
    useEffect(() => {
        console.log(id);
        const result = getAllJobs(id);
        result.then((res) => {
            setJobs(res.jobs);
        });
        console.log(jobs);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleDelete = (id) => {
        const result = deleteJob(id);
        result.then((res) => {
            if (res.status === 200) {
                alert("Job Deleted");
                setJobs(jobs.filter((job) => job._id !== id));
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
                                    <TableCell>Job ID</TableCell>
                                    <TableCell>Job Title</TableCell>
                                    <TableCell>Job Location</TableCell>
                                    <TableCell>Job Code</TableCell>
                                    <TableCell>Last Date</TableCell>
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
                                        <TableCell>{job.jobCode}</TableCell>
                                        <TableCell>{job.endDate}</TableCell>
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
                                                <JobModalCorporate
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
            </Container>
        </>
    );
}