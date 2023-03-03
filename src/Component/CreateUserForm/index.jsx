import React, { useState } from "react";
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../API/user";

const initialFormData = {
    name: "",
    email: "",
    age: "",
    gender: "",
    religion: "",
    disability: [],
    category: "",
    location: "",
    pastJobs: [],
    experience: "",
};

export default function CreateUserForm() {
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const navigation = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await createUser(formData);
        console.log(res);        
        if (res.status === 201) {
            navigation("/dashboard");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="age"
                label="Age"
                value={formData.age}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <FormControl fullWidth margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select name="gender" value={formData.gender} onChange={handleChange}>
                    <MenuItem value="M">Male</MenuItem>
                    <MenuItem value="F">Female</MenuItem>
                    <MenuItem value="O">Other</MenuItem>
                </Select>
            </FormControl>
            <TextField
                name="religion"
                label="Religion"
                value={formData.religion}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="disability"
                label="Disability"
                value={formData.disability}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <FormControl fullWidth margin="normal">
                <InputLabel>Category</InputLabel>
                <Select name="category" value={formData.category} onChange={handleChange}>
                    <MenuItem value="General">General</MenuItem>
                    <MenuItem value="OBC">OBC</MenuItem>
                    <MenuItem value="SC">SC</MenuItem>
                    <MenuItem value="ST">ST</MenuItem>
                </Select>
            </FormControl>
            <TextField
                name="location"
                label="Location"
                value={formData.location}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="pastJobs"
                label="Past Jobs"
                value={formData.pastJobs}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <FormControl fullWidth margin="normal">
                <InputLabel>Experience</InputLabel>
                <Select name="experience" value={formData.experience} onChange={handleChange}>
                    <MenuItem value="0-3months">0-3 Months</MenuItem>
                    <MenuItem value="3-6months">3-6 Months</MenuItem>
                    <MenuItem value="6-12months">6-12 Months</MenuItem>
                    <MenuItem value="morethan1year">More than 1 Year</MenuItem>
                </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};