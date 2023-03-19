import React, { useState , useContext} from "react";
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
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
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
                    <MenuItem value="1">Category 1</MenuItem>
                    <MenuItem value="2">Category 2</MenuItem>
                    <MenuItem value="3">Category 3</MenuItem>
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
                    <MenuItem value="1">State 1</MenuItem>
                    <MenuItem value="2">State 2</MenuItem>
                    <MenuItem value="3">State 3</MenuItem>
                    );
                </Select>
            </FormControl>
            <TextField
                label="Religion"
                variant="outlined"
                margin="normal"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                fullWidth
            />
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