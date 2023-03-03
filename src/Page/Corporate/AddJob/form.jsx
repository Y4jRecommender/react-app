import React from 'react';
import { TextField, Checkbox, FormControlLabel, FormGroup, Button, MenuItem } from '@mui/material';

export default function CreateJobForm() {
    const [formData, setFormData] = React.useState({
        age: '',
        edate: '',
        gender: '',
        jd: '',
        jobtype: '',
        location: [],
        noOfVacancies: '',
        sdate: '',
        disability: [],
        skills: [],
        title: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChange = (event) => {
        const { name } = event.target;
        setFormData(prevState => {
            const index = prevState[name].indexOf(name);
            if (index === -1) {
                return {
                    ...prevState,
                    [name]: [...prevState[name], name]
                };
            } else {
                const updatedList = [...prevState[name]];
                updatedList.splice(index, 1);
                return {
                    ...prevState,
                    [name]: updatedList
                };
            }
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // call API or handle form submission here
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="title"
                label="Title"
                value={formData.title}
                onChange={handleInputChange}
            />
            <TextField
                name="age"
                label="Age"
                type="number"
                value={formData.age}
                onChange={handleInputChange}
            />
            <TextField
                name="gender"
                label="Gender"
                value={formData.gender}
                onChange={handleInputChange}
            />
            <TextField
                name="jd"
                label="Job Description"
                multiline
                rows={4}
                value={formData.jd}
                onChange={handleInputChange}
            />
            <TextField
                name="jobtype"
                label="Job Type"
                value={formData.jobtype}
                onChange={handleInputChange}
            />
            <TextField
                name="noOfVacancies"
                label="Number of Vacancies"
                type="number"
                value={formData.noOfVacancies}
                onChange={handleInputChange}
            />
            <TextField
                name="location"
                label="Location"
                select
                SelectProps={{
                    multiple: true,
                    value: formData.location,
                    onChange: handleInputChange
                }}
                variant="standard"
            >
                {['Delhi', 'Pune'].map((location) => (
                    <MenuItem key={location} value={location}>
                        {location}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                name="disability"
                label="Disability"
                select
                SelectProps={{
                    multiple: true,
                    value: formData.disability,
                    onChange: handleInputChange
                }}
                variant="standard"
            >
                {['deaf', 'hearing impairment'].map((disability) => (
                    <MenuItem key={disability} value={disability}>
                        {disability}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                name="skills"
                label="Skills"
                select
                SelectProps={{
                    multiple: true,
                    value: formData.skills,
                    onChange: handleInputChange
                }}
                variant="standard"
            >
                {['passionate', 'computer basics', 'english'].map((skill) => (
                    <MenuItem key={skill} value={skill}>
                        {skill}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                name="sdate"
                label="Start Date"
                type="date"
                value={formData.sdate}
                onChange={handleInputChange}
            />
            <TextField
                name="edate"
                label="End Date"
                type="date"
                value={formData.edate}
                onChange={handleInputChange}
            />
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={formData.location.includes('Delhi')}
                            onChange={handleCheckboxChange}
                            name="Delhi"
                        />
                    }
                    label="Delhi"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={formData.location.includes('Pune')}
                            onChange={handleCheckboxChange}
                            name="Pune"
                        />
                    }
                    label="Pune"
                />
            </FormGroup>
            <Button type="submit">Submit</Button>
        </form>
    );
}