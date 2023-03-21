import React, { useState, useEffect, useContext } from "react";
import { Button, Container, Box } from "@mui/material";
import { getAllJobs } from "../../../API/corporate";
import { deleteJob } from "../../../API/job";
import { AuthContext } from "../../../Context/authContext";
import JobModelCorporate from "../JobModel";
import { Stack } from "@mui/system";
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
            <Container sx={{ py: 4 }} maxWidth="xl">
                <Box sx={{ flexGrow: 1 }}>
                    <p>All Jobs</p>
                    <table border="1">
                        <thead>
                            <tr>
                                <th width="30%">Job Title</th>
                                <th width="10%">Job Code</th>
                                <th width="10%">Job Type</th>
                                <th width="20%">End Date</th>
                                <th width="20%">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {jobs.map((job) => (
                                <tr key={job.__id}>
                                    <td >{job.jobTitle}</td>
                                    <td >{job.jobCode}</td>
                                    <td >{job.jobType}</td>
                                    <td>{job.endDate}</td>
                                    <td>
                                        <Stack spacing={2} direction="row">
                                            <Button
                                                variant="contained"
                                                onClick={() => {
                                                    handleDelete(job._id);
                                                }
                                                }
                                            >
                                                Delete
                                            </Button>

                                            <JobModelCorporate job={job} />
                                        </Stack>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Box>
                <br />
            </Container>
        </>
    );
}