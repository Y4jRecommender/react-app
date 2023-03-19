import { useContext, useState } from 'react';
import { } from '@mui/material';
import { AuthContext } from '../../../Context/authContext';
import { Box, Button, TextField, FormControl, Container, InputLabel, Typography, Select, MenuItem } from "@mui/material";
import { editUser } from '../../../API/user';


const ProfilePage = () => {
    const { user, setUser } = useContext(AuthContext);

    const updateUser = async (user) => {
        const response = await editUser(user);
        console.log(response);
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h5" component="h5" gutterBottom>
                Profile
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
                {/* Text field */}
                <TextField
                    name="name"
                    label="Name"
                    value={user.name}
                    onChange={(e) => { setUser({ ...user, name: e.target.value }) }}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    name="email"
                    label="Email"
                    value={user.email}
                    onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    name="dateOfBirth"
                    label="Date of Birth"
                    value={user.dateOfBirth}
                    onChange={(e) => { setUser({ ...user, dateOfBirth: e.target.value }) }}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    name="age"
                    label="Age"
                    value={user.age}
                    onChange={(e) => { setUser({ ...user, age: e.target.value }) }}
                    fullWidth
                    margin="normal"
                />

                <FormControl fullWidth margin="normal">
                    <InputLabel>Gender</InputLabel>
                    <Select name="gender" value={user.gender} onChange={(e) => {
                        setUser({ ...user, gender: e.target.value })
                    }}>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                </FormControl>

                {/* Heading to say that this is data */}
                <br /><br />
                <Typography variant="h6" component="h6" gutterBottom>
                    More Details
                </Typography>
                <Typography gutterBottom>
                    State: {user.stateId}
                </Typography>
                <Typography gutterBottom>
                    Disability Type: {user.disabilityTypeId}
                </Typography>
                <Typography gutterBottom>
                    Math Skill: {user.skillMath}
                </Typography>
                <Typography gutterBottom>
                    English Skill: {user.skillEnglish}
                </Typography>
                <Typography gutterBottom>
                    Reasoning Skill: {user.skillReasoning}
                </Typography>
                <Typography gutterBottom>
                    Computer Skill: {user.skillComputers}
                </Typography>
                <Typography gutterBottom>
                    Typing Skill: {user.skillTyping}
                </Typography>
                <Typography gutterBottom>
                    Personal Skill: {user.skillPersonal}
                </Typography>
                <Typography gutterBottom>
                    Interpersonal Skill: {user.skillInterpersonal}
                </Typography>
                <Typography gutterBottom>
                    Communication Skill: {user.skillCommunication}
                </Typography>
                <Typography gutterBottom>
                    Other Skill: {user.skillOthers}
                </Typography>
                <Typography gutterBottom>
                    Y4J Recommends: {user.y4jRecommends}
                </Typography>

                <Button type="submit" variant="contained" color="primary" onClick={()=>{
                    updateUser(user);
                }}>
                    Edit Profile
                </Button>
                <br /><br />
            </Box>
        </Container >
    );
};

export default ProfilePage;