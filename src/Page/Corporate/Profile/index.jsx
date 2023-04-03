import { useContext } from 'react';
import { Box, Button, TextField, Container, Typography } from '@mui/material';
import { AuthContext } from '../../../Context/authContext';
import { SectionContext } from '../../../Context/sectionContext';
import { editCorporate } from '../../../API/corporate';
const CorporateProfile = () => {
    const { user, setUser } = useContext(AuthContext);
    const { section } = useContext(SectionContext);

    const Edit = () => {
        editCorporate(user).then((res) => {
            console.log(res);
        });
    };

    return (
        <>
            {user && user.role === 'corporate' && section === 'profile' && (
                <>
                    <Container maxWidth="sm">
                        <Typography variant="h5" component="h5" gutterBottom>
                            <br />
                            Profile
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                value={user.name}
                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={user.email}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="website"
                                label="Website"
                                name="website"
                                autoComplete="website"
                                autoFocus
                                value={user.website}
                                onChange={(e) => setUser({ ...user, website: e.target.value })}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="address"
                                label="Address"
                                name="address"
                                autoFocus
                                value={user.address}
                                onChange={(e) => setUser({ ...user, address: e.target.value })}
                            />

                            {/* Edit button */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => Edit()}
                            >
                                Edit
                            </Button>

                        </Box>
                    </Container>
                </>
            )}
        </>
    )
}

export default CorporateProfile;