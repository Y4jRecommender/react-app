import { useContext, useState } from 'react';
import { Button, TextField, FormControl, Container, InputLabel, Typography, Select, MenuItem, Grid } from '@mui/material';
import { AuthContext } from '../../../Context/authContext';
import { editUser } from '../../../API/user';
import { SectionContext } from '../../../Context/sectionContext';

const ProfilePage = () => {
    const { user, setUser } = useContext(AuthContext);
    const { section, setSection } = useContext(SectionContext);

    const [formData, setFormData] = useState({
        Misid: user.Misid,
        BatchId: user.BatchId,
        CandidateId: user.CandidateId,
        CandidateName: user.CandidateName,
        Email: user.Email,
        PanNumber: user.PanNumber,
        DateOfBirth: user.DateOfBirth,
        Gender: user.Gender,
        Disability: user.Disability,
        Address: user.Address,
        StateName: user.StateName,
        DistrictName: user.DistrictName,
        MandalName: user.MandalName,
        VillageName: user.VillageName,
        Pincode: user.Pincode,
        KnownName: user.KnownName,
        PreferredJobLocation: user.PreferredJobLocation,
        MaritalStatusName: user.MaritalStatusName,
        TalentName: user.TalentName,
        SkillTyping: user.SkillTyping,
        PrevTrainingProviderName: user.PrevTrainingProviderName,
        SkillsCovered: user.SkillsCovered,
        TotExpYears: user.TotExpYears,
        TotExpMonths: user.TotExpMonths,
        CDate: user.CDate,
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await editUser(formData);
        setUser(data);
        setSection("profile");
    };

    return (
        <>
            {section === "profile" && (
                <>
                    <Container maxWidth="sm" sx={{ pb: 5 }}>
                        <Typography variant="h5" component="h5" gutterBottom>
                            <br />
                            Profile
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="MIS ID"
                                        name="Misid"
                                        value={formData.Misid}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Batch ID"
                                        name="BatchId"
                                        value={formData.BatchId}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Candidate ID"
                                        name="CandidateId"
                                        value={formData.CandidateId}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Candidate Name"
                                        name="CandidateName"
                                        value={formData.CandidateName}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Email"
                                        name="Email"
                                        value={formData.Email}
                                        onChange={handleChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="PAN Number"
                                        name="PanNumber"
                                        value={formData.PanNumber}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Date of Birth"
                                        name="DateOfBirth"
                                        value={formData.DateOfBirth}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Gender</InputLabel>
                                        <Select
                                            name="Gender"
                                            value={formData.Gender}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="Male">Male</MenuItem>
                                            <MenuItem value="Female">Female</MenuItem>
                                            <MenuItem value="Other">Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Disability"
                                        name="Disability"
                                        value={formData.Disability}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        label="Address"
                                        name="Address"
                                        value={formData.Address}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="State Name"
                                        name="StateName"
                                        value={formData.StateName}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="District Name"
                                        name="DistrictName"
                                        value={formData.DistrictName}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Mandal Name"
                                        name="MandalName"
                                        value={formData.MandalName}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Village Name"
                                        name="VillageName"
                                        value={formData.VillageName}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Pincode"
                                        name="Pincode"
                                        value={formData.Pincode}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Known Name"
                                        name="KnownName"
                                        value={formData.KnownName}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Preferred Job Location"
                                        name="PreferredJobLocation"
                                        value={formData.PreferredJobLocation}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Marital Status Name"
                                        name="MaritalStatusName"
                                        value={formData.MaritalStatusName}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Talent Name"
                                        name="TalentName"
                                        value={formData.TalentName}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Skill Typing"
                                        name="SkillTyping"
                                        value={formData.SkillTyping}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Prev Training Provider Name"
                                        name="PrevTrainingProviderName"
                                        value={formData.PrevTrainingProviderName}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Skills Covered"
                                        name="SkillsCovered"
                                        value={formData.SkillsCovered}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Total Experience (Years)"
                                        name="TotExpYears"
                                        value={formData.TotExpYears}
                                        onChange={handleChange}
                                        fullWidth
                                        type="number"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Total Experience (Months)"
                                        name="TotExpMonths"
                                        value={formData.TotExpMonths}
                                        onChange={handleChange}
                                        fullWidth
                                        type="number"
                                    />
                                </Grid>

                                {/* Submit */}
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Container >
                </>
            )}
        </>
    );
};

export default ProfilePage;