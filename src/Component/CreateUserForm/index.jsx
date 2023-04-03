import React, { useState, useContext } from "react";
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { createUser } from "../../API/user";
import { SectionContext } from "../../Context/sectionContext";

const initialFormData = {
    name: "",
    email: "",
    age: "",
    gender: "",
    dateOfBirth: "",
    socialCatId: "",
    stateId: "",
    religion: "",
    disabilityTypeId: "",
    skillMath: "",
    skillEnglish: "",
    skillReasoning: "",
    skillComputers: "",
    skillTyping: "",
    skillPersonal: "",
    skillInterpersonal: "",
    skillCommunication: "",
    skillOthers: "",
    y4jRecommends: "",
};

export default function CreateUserForm() {
    const [formData, setFormData] = useState(initialFormData);
    const { setSection } = useContext(SectionContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await createUser(formData);
        console.log(res);
        if (res.status === 201) {
            setSection("home");
            alert("User Created Successfully");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Heading */}
            <h2>Create User</h2>
            <TextField
                label="Name"
                variant="outlined"
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
            />
            <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
                fullWidth
            />
            <TextField
                label="Age"
                variant="outlined"
                margin="normal"
                name="age"
                value={formData.age}
                onChange={handleChange}
                type="number"
                fullWidth
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
                    <MenuItem value="3">Other</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Date of Birth"
                variant="outlined"
                margin="normal"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                type="date"
                fullWidth
            />
            <FormControl variant="outlined" margin="normal" fullWidth>
                <InputLabel>Social Category</InputLabel>
                <Select
                    name="socialCatId"
                    value={formData.socialCatId}
                    onChange={handleChange}
                    label="Social Category"
                >
                    <MenuItem value="1">General</MenuItem>
                    <MenuItem value="2">OBC</MenuItem>
                    <MenuItem value="3">SC</MenuItem>
                    <MenuItem value="4">ST</MenuItem>
                    <MenuItem value="5">EWS</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" margin="normal" fullWidth>
                <InputLabel>State</InputLabel>
                <Select
                    name="stateId"
                    value={formData.stateId}
                    onChange={handleChange}
                    label="State"
                >
                    <MenuItem value="1">Andaman and Nicobar Islands</MenuItem>
                    <MenuItem value="2">Andhra Pradesh</MenuItem>
                    <MenuItem value="3">Arunachal Pradesh</MenuItem>
                    <MenuItem value="4">Assam</MenuItem>
                    <MenuItem value="5">Bihar</MenuItem>
                    <MenuItem value="6">Chandigarh</MenuItem>
                    <MenuItem value="7">Chhattisgarh</MenuItem>
                    <MenuItem value="8">Dadra and Nagar Haveli</MenuItem>
                    <MenuItem value="37">Daman and Diu</MenuItem>
                    <MenuItem value="9">Delhi</MenuItem>
                    <MenuItem value="10">Goa</MenuItem>
                    <MenuItem value="11">Gujarat</MenuItem>
                    <MenuItem value="12">Haryana</MenuItem>
                    <MenuItem value="13">Himachal Pradesh</MenuItem>
                    <MenuItem value="14">Jammu and Kashmir</MenuItem>
                    <MenuItem value="15">Jharkhand</MenuItem>
                    <MenuItem value="16">Karnataka</MenuItem>
                    <MenuItem value="17">Kerala</MenuItem>
                    <MenuItem value="18">Ladakh</MenuItem>
                    <MenuItem value="19">Lakshadweep</MenuItem>
                    <MenuItem value="20">Madhya Pradesh</MenuItem>
                    <MenuItem value="21">Maharashtra</MenuItem>
                    <MenuItem value="22">Manipur</MenuItem>
                    <MenuItem value="23">Meghalaya</MenuItem>
                    <MenuItem value="24">Mizoram</MenuItem>
                    <MenuItem value="25">Nagaland</MenuItem>
                    <MenuItem value="26">Odisha</MenuItem>
                    <MenuItem value="27">Puducherry</MenuItem>
                    <MenuItem value="28">Punjab</MenuItem>
                    <MenuItem value="29">Rajasthan</MenuItem>
                    <MenuItem value="30">Sikkim</MenuItem>
                    <MenuItem value="31">Tamil Nadu</MenuItem>
                    <MenuItem value="32">Telangana</MenuItem>
                    <MenuItem value="33">Tripura</MenuItem>
                    <MenuItem value="34">Uttar Pradesh</MenuItem>
                    <MenuItem value="35">Uttarakhand</MenuItem>
                    <MenuItem value="36">West Bengal</MenuItem>
                    );
                </Select>
            </FormControl>
            
            {/* Religion */}
            
            <FormControl variant="outlined" margin="normal" fullWidth>
                <InputLabel>Disability Type</InputLabel>
                <Select
                    name="disabilityTypeId"
                    value={formData.disabilityTypeId}
                    onChange={handleChange}
                    label="Disability Type"
                >
                    <MenuItem value="1">Type 1</MenuItem>
                    <MenuItem value="2">Type 2</MenuItem>
                    <MenuItem value="3">Type 3</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Math"
                variant="outlined"
                margin="normal"
                name="skillMath"
                value={formData.skillMath}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="English"
                variant="outlined"
                margin="normal"
                name="skillEnglish"
                value={formData.skillEnglish}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Reasoning"
                variant="outlined"
                margin="normal"
                name="skillReasoning"
                value={formData.skillReasoning}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Computers"
                variant="outlined"
                margin="normal"
                name="skillComputers"
                value={formData.skillComputers}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Typing"
                variant="outlined"
                margin="normal"
                name="skillTyping"
                value={formData.skillTyping}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Personal"
                variant="outlined"
                margin="normal"
                name="skillPersonal"
                value={formData.skillPersonal}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Interpersonal"
                variant="outlined"
                margin="normal"
                name="skillInterpersonal"
                value={formData.skillInterpersonal}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Communication"
                variant="outlined"
                margin="normal"
                name="skillCommunication"
                value={formData.skillCommunication}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Others"
                variant="outlined"
                margin="normal"
                name="skillOthers"
                value={formData.skillOthers}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Y4J Recommends"
                variant="outlined"
                margin="normal"
                name="y4jRecommends"
                value={formData.y4jRecommends}
                onChange={handleChange}
                fullWidth
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
    );
};