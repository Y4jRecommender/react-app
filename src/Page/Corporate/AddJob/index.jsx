import React, { useState, useContext } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Container, Box } from '@mui/material';
import { createJob } from '../../../API/job';
import { SectionContext } from '../../../Context/sectionContext';
import { AuthContext } from '../../../Context/authContext';
export default function CreateJobPage() {
    const { setSection } = useContext(SectionContext);
    const { id, name, user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        jobCode: '',
        jobTitle: '',
        jobDesc: '',
        jobType: '',
        experience: '',
        jobLocation: '',
        noOfVacancies: '',
        disabilityTypeId: '',
        qualificationIds: '',
        age: '',
        gender: '',
        skillSet: '',
        responsibilities: '',
        languages: '',
        annualSalary: '',
        incentives: '',
        facilities: '',
        startDate: '',
        endDate: '',
        companyID: id,
        companyName: name,
        address: user.address,
        corporateStatus: 1,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await createJob(formData);
        console.log(res);
        if (res.status === 201) {
            setSection('home');
            alert('Job Created Successfully');
        }
    };

    return (
        <Container sx={{ py: 4 }} maxWidth="xl">
            <Box sx={{ flexGrow: 1 }}>
                <form onSubmit={handleSubmit}>
                    <h2>Create New Job</h2>
                    <TextField
                        name="jobCode"
                        label="Job Code"
                        value={formData.jobCode}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
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
                        name="jobDesc"
                        label="Job Description"
                        value={formData.jobDesc}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <FormControl variant="outlined" margin="normal" fullWidth>
                        <InputLabel id="jobTypeLabel">Job Type</InputLabel>
                        <Select labelId="jobTypeLabel" name="jobType" value={formData.jobType} onChange={handleChange}>
                            <MenuItem value={1}>Type 1</MenuItem>
                            <MenuItem value={2}>Type 2</MenuItem>
                            <MenuItem value={3}>Type 3</MenuItem>
                            <MenuItem value={12}>Type 12</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        name="experience"
                        label="Experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <FormControl variant="outlined" margin="normal" fullWidth>
                        <InputLabel id="jobLocationLabel">Job Location</InputLabel>
                        <Select labelId="jobLocationLabel" name="jobLocation" value={formData.jobLocation} onChange={handleChange}>
                            <MenuItem value={1}>Location 1</MenuItem>
                            <MenuItem value={2}>Location 2</MenuItem>
                            <MenuItem value={3}>Location 3</MenuItem>
                            <MenuItem value={4}>Location 4</MenuItem>
                        </Select>
                    </FormControl>


                    <TextField
                        name="noOfVacancies"
                        label="No. of Vacancies"
                        value={formData.noOfVacancies}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <FormControl variant="outlined" margin="normal" fullWidth>
                        <InputLabel id="disabilityTypeIdLabel">Disability Type</InputLabel>
                        <Select labelId="disabilityTypeIdLabel" name="disabilityTypeId" value={formData.disabilityTypeId} onChange={handleChange}>
                            <MenuItem value={1}>Disability Type 1</MenuItem>
                            <MenuItem value={2}>Disability Type 2</MenuItem>
                            <MenuItem value={3}>Disability Type 3</MenuItem>
                            <MenuItem value={4}>Disability Type 4</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        name="qualificationIds"
                        label="Qualification"
                        value={formData.qualificationIds}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <TextField
                        name="age"
                        label="Age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <FormControl variant="outlined" margin="normal" fullWidth>
                        <InputLabel>Gender</InputLabel>
                        <Select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            label="Gender"
                        >
                            <MenuItem value="1">Male</MenuItem>
                            <MenuItem value="2">Female</MenuItem>
                            <MenuItem value="0">Other</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        name="skillSet"
                        label="Skill Set"
                        value={formData.skillSet}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <TextField
                        name="responsibilities"
                        label="Responsibilities"
                        value={formData.responsibilities}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <TextField
                        name="languages"
                        label="Languages"
                        value={formData.languages}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <TextField
                        name="annualSalary"
                        label="Annual Salary"
                        value={formData.annualSalary}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <TextField
                        name="incentives"
                        label="Incentives"
                        value={formData.incentives}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />

                    <TextField
                        name="facilities"
                        label="Facilities"
                        value={formData.facilities}
                        onChange={handleChange}
                        required
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

                    <TextField
                        name="CorporateStatus"
                        label="Corporate Status"
                        value={formData.corporateStatus}
                        onChange={handleChange}
                        required
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

