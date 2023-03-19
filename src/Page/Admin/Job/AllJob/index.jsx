import React, { useState, useEffect } from "react";
import { Button, Container, Box } from "@mui/material";
import { deleteJob } from "../../../../API/job";
import { getAllJobs } from "../../../../API/job";
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
                                <th width="10%">Job ID</th>
                                <th width="30%">Job Title</th>
                                <th width="10%">Job Location</th>
                                <th width="10%">Company Name</th>
                                <th width="20%">Company Id</th>
                                <th width="20%">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {jobs.map((job) => (
                                <tr key={job.__id}>
                                    <td >{job._id}</td>
                                    <td >{job.jobTitle}</td>
                                    <td >{job.jobLocation}</td>
                                    <td>{job.companyName}</td>
                                    <td>{job.companyID}</td>
                                    <td>
                                        <Button
                                            variant="contained"
                                            onClick={() => {
                                                handleDelete(job._id);
                                            }
                                            }
                                        >
                                            Delete
                                        </Button>
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