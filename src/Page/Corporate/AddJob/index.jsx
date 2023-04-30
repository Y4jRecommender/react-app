import React, { useState, useContext } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Container, Box, Typography } from '@mui/material';
import { createJob } from '../../../API/job';
import { SectionContext } from '../../../Context/sectionContext';
import { AuthContext } from '../../../Context/authContext';

export default function CreateJobPage() {
    const { setSection } = useContext(SectionContext);
    const { id, name } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        hrName: "",
        hrEmail: "",
        hrPhone: "",
        companyName: name,
        companyId: id,
        jobTitle: '',
        jobDescription: '',
        applications: [],
        jobType: '',
        disabilityType: '',
        openings: '',
        jobLocation: '',
        startDate: '',
        endDate: '',
        status: 'active',
        postedDate: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await createJob(formData);
        console.log(res);
        if (res.status === 201 || res.status === 200) {
            setSection('home');
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h5" component="h5" gutterBottom>
                <br />
                Create New Job
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <form onSubmit={handleSubmit}>

                    <TextField
                        name="jobTitle"
                        label="Job Title"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        name="jobDescription"
                        label="Job Description"
                        value={formData.jobDescription}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        maxRows={5}
                        variant="outlined"
                        margin="normal"
                    />
                    <TextField
                        name="jobType"
                        label="Job Type"
                        value={formData.jobType}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        maxRows={5}
                        variant="outlined"
                        margin="normal"
                    />

                    {/* jobLocation */}
                    <TextField
                        name="jobLocation"
                        label="Job Location"
                        value={formData.jobLocation}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <TextField
                        name="openings"
                        label="Openings"
                        value={formData.openings}
                        onChange={handleChange}
                        fullWidth
                        type='number'
                        variant="outlined"
                        margin="normal"
                    />

                    {/* Disability Type */}
                    <TextField
                        name="disabilityType"
                        label="Disability Type"
                        value={formData.disabilityType}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <TextField
                        name="startDate"
                        label="Start Date"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="date"
                    />

                    <TextField
                        name="endDate"
                        label="End Date"
                        value={formData.endDate}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="date"
                    />

                    {/* hrEmail */}
                    <TextField
                        name="hrEmail"
                        label="HR Email"
                        value={formData.hrEmail}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    {/* hrPhone */}
                    <TextField
                        name="hrPhone"
                        label="HR Phone"
                        value={formData.hrPhone}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    {/* hrName */}
                    <TextField
                        name="hrName"
                        label="HR Name"
                        value={formData.hrName}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{ marginTop: "1rem" }}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>);


};

