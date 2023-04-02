import { useContext } from 'react';
import { Box, Button, TextField, FormControl, Container, InputLabel, Typography, Select, MenuItem } from '@mui/material';
import { AuthContext } from '../../../Context/authContext';
import { editUser } from '../../../API/user';
import { SectionContext } from '../../../Context/sectionContext';

const ProfilePage = () => {
    const { user, setUser } = useContext(AuthContext);
    const { section, setSection } = useContext(SectionContext);

    const updateUser = async (user) => {
        const response = await editUser(user);
        console.log(response);
    }

    return (
        <>
            {section === "profile" && (
                <>
                    <Container maxWidth="sm">
                        <Typography variant="h5" component="h5" gutterBottom>
                            <br />
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
                                    <MenuItem value="1">Male</MenuItem>
                                    <MenuItem value="2">Female</MenuItem>
                                    <MenuItem value="3">Other</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                name="dateOfBirth"
                                label="Date of Birth"
                                value={user.dateOfBirth}
                                onChange={(e) => { setUser({ ...user, dateOfBirth: e.target.value }) }}
                                fullWidth
                                margin="normal"
                            />

                            {/* Social CAT ID which is category */}
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Social Category</InputLabel>
                                <Select name="socialCatId" value={user.socialCatId} onChange={(e) => {
                                    setUser({ ...user, socialCatId: e.target.value })
                                }}>
                                    <MenuItem value="1">General</MenuItem>
                                    <MenuItem value="2">OBC</MenuItem>
                                    <MenuItem value="3">SC</MenuItem>
                                    <MenuItem value="4">ST</MenuItem>
                                    <MenuItem value="5">EWS</MenuItem>
                                </Select>
                            </FormControl>

                            {/* State ID */}
                            <FormControl fullWidth margin="normal">
                                <InputLabel>State</InputLabel>
                                <Select name="stateId" value={user.stateId} onChange={(e) => {
                                    setUser({ ...user, stateId: e.target.value })
                                }}>
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
                                </Select>
                            </FormControl>

                            {/* Religion */}
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Religion</InputLabel>
                                <Select name="religionId" value={user.religionId} onChange={(e) => {
                                    setUser({ ...user, religionId: e.target.value })
                                }}>
                                    <MenuItem value="1">Hindu</MenuItem>
                                    <MenuItem value="2">Muslim</MenuItem>
                                    <MenuItem value="3">Christian</MenuItem>
                                    <MenuItem value="4">Sikh</MenuItem>
                                    <MenuItem value="5">Buddhist</MenuItem>
                                    <MenuItem value="6">Jain</MenuItem>
                                    <MenuItem value="7">Parsi</MenuItem>
                                    <MenuItem value="8">Jewish</MenuItem>
                                    <MenuItem value="9">Other</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Disability Type */}
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Disability Type</InputLabel>
                                <Select name="disabilityTypeId" value={user.disabilityTypeId} onChange={(e) => {
                                    setUser({ ...user, disabilityTypeId: e.target.value })
                                }}>
                                    <MenuItem value="1">Visual Impairment</MenuItem>
                                    <MenuItem value="2">Hearing Impairment</MenuItem>
                                    <MenuItem value="3">Locomotor Disability</MenuItem>
                                    <MenuItem value="4">Mental Illness</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Skill */}
                            <br /><br />
                            <Typography variant="h6" component="h6" gutterBottom>
                                Skills
                            </Typography>

                            {/* Skill math, range of number between 1-5 */}
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Math Skill</InputLabel>
                                <Select name="skillMath" value={user.skillMath} onChange={(e) => {
                                    setUser({ ...user, skillMath: e.target.value })
                                }}>
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                    <MenuItem value="5">5</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Skill English, range of number between 1-5 */}
                            <FormControl fullWidth margin="normal">
                                <InputLabel>English Skill</InputLabel>
                                <Select name="skillEnglish" value={user.skillEnglish} onChange={(e) => {
                                    setUser({ ...user, skillEnglish: e.target.value })
                                }}>
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                    <MenuItem value="5">5</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Skill Reasoning, range of number between 1-5 */}
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Reasoning Skill</InputLabel>
                                <Select name="skillReasoning" value={user.skillReasoning} onChange={(e) => {
                                    setUser({ ...user, skillReasoning: e.target.value })
                                }}>
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                    <MenuItem value="5">5</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Skill Computers, range of number between 1-5 */}
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Computer Skill</InputLabel>
                                <Select name="skillComputers" value={user.skillComputers} onChange={(e) => {
                                    setUser({ ...user, skillComputers: e.target.value })
                                }}>
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                    <MenuItem value="5">5</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Skill Typing, range of number between 1-5 */}
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Typing Skill</InputLabel>
                                <Select name="skillTyping" value={user.skillTyping} onChange={(e) => {
                                    setUser({ ...user, skillTyping: e.target.value })
                                }}>
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                    <MenuItem value="5">5</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Skill Personal, range of number between 1-5 */}
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Personal Skill</InputLabel>
                                <Select name="skillPersonal" value={user.skillPersonal} onChange={(e) => {
                                    setUser({ ...user, skillPersonal: e.target.value })
                                }}>
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                    <MenuItem value="5">5</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Skill Interpersonal */}
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Interpersonal Skill</InputLabel>
                                <Select name="skillInterpersonal" value={user.skillInterpersonal} onChange={(e) => {
                                    setUser({ ...user, skillInterpersonal: e.target.value })
                                }}>
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                    <MenuItem value="5">5</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Skill Communication */}
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Communication Skill</InputLabel>
                                <Select name="skillCommunication" value={user.skillCommunication} onChange={(e) => {
                                    setUser({ ...user, skillCommunication: e.target.value })
                                }}>
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                    <MenuItem value="5">5</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Skill Others */}
                            <FormControl fullWidth margin="normal">
                                <InputLabel>Others Skill</InputLabel>
                                <Select name="skillOthers" value={user.skillOthers} onChange={(e) => {
                                    setUser({ ...user, skillOthers: e.target.value })
                                }}>
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                    <MenuItem value="5">5</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Submit Button */}
                            <Button type="submit" variant="contained" color="primary" onClick={() => {
                                updateUser(user);
                            }}>
                                Edit Profile
                            </Button>
                            <br /><br />
                        </Box>
                    </Container >
                </>
            )}
        </>
    );
};

export default ProfilePage;