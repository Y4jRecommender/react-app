import React, { useState, useContext } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { deleteUser } from "../../../../API/user";
import { SectionContext } from "../../../../Context/sectionContext";

export default function DeleteUser() {
    const [email, setEmail] = useState("");
    const { setSection } = useContext(SectionContext);

    const handleChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await deleteUser(email);
        console.log(res);
        if (res.status === 200) {
            setSection("home");
            alert("User Deleted Successfully");
        }
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h5" component="h5" gutterBottom sx={{ py: 2 }}>
                <br />
                Delete User
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <br /> <br />
                    <Button type="submit" variant="contained" color="primary">
                        Delete User
                    </Button>
                </form>
            </Box>
        </Container>
    );
}