import React, { useState, useContext } from "react";
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Grid } from "@mui/material";
import { createUser } from "../../API/user";
import { SectionContext } from "../../Context/sectionContext";

const initialFormData = {
    Misid: "",
    BatchId: "",
    CandidateId: "",
    CandidateName: "",
    Email: "",
    PanNumber: "",
    DateOfBirth: "",
    Gender: "",
    Disability: "",
    Address: "",
    StateName: "",
    DistrictName: "",
    MandalName: "",
    VillageName: "",
    Pincode: "",
    KnownName: "",
    PreferredJobLocation: "",
    MaritalStatusName: "",
    TalentName: "",
    SkillTyping: "",
    PrevTrainingProviderName: "",
    SkillsCovered: "",
    TotExpYears: 0,
    TotExpMonths: 0,
    CDate: "",
    role: "user"
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
        }
    };

    return (
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


    );
};