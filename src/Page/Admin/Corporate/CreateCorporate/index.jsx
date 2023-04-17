import { React, useState, useContext } from 'react';
import Box from '@mui/material/Box';
import { Container, TextField, Button, Typography } from '@mui/material';
import { SectionContext } from '../../../../Context/sectionContext';
import { createCorporate } from '../../../../API/corporate';

const initialFormData = {
    name: '',
    email: '',
    website: '',
    address: '',
}

export default function CreateCorporate() {
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
        const res = await createCorporate(formData);
        console.log(res);
        if (res.status === 201) {
            setSection("home");
            alert("Corporate Created Successfully");
        }
    };

    return (
        <>
            <Container maxWidth="md">
                <Typography variant="h5" component="h5" gutterBottom sx={{ py: 2 }}>
                    <br />
                    Create New Corporate
                </Typography>
                <Box sx={{ flexGrow: 1, pb: 5 }}>
                    <form onSubmit={handleSubmit}>
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
                            label="Website"
                            variant="outlined"
                            margin="normal"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            type="text"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Address"
                            variant="outlined"
                            margin="normal"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            type="text"
                            fullWidth
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Create
                        </Button>
                    </form>

                </Box>
            </Container>
        </>
    );
}