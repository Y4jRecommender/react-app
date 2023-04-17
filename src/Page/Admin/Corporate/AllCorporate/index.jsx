import React, { useState, useContext, useEffect } from "react";
import { Button, Container, Box, Typography } from "@mui/material";
import { deleteCorporate, getAllCorporates } from "../../../../API/corporate";
import { SectionContext } from "../../../../Context/sectionContext";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function AllCorporateAdmin() {
    const { setSection } = useContext(SectionContext);
    const [corporate, setCorporates] = useState([]);
    useEffect(() => {
        // call the api to get all the corporate
        const result = getAllCorporates();
        result.then((res) => {
            setCorporates(res.corporates);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleDelete = (email) => {
        const result = deleteCorporate(email);
        result.then((res) => {
            if (res.status === 200) {
                alert("Corporate Deleted");
                setCorporates(corporate.filter((corporate) => corporate.email !== email));
            }
        });
    };
    return (
        <>
            <Container maxWidth="xl">
                <Typography variant="h5" component="h5" gutterBottom sx={{ py: 2 }}>
                    <br />
                    All Corporates
                </Typography>
                <Box sx={{ flexGcorporate: 1, textAlign: 'center' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Corporate ID</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Website</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {corporate.map((corporate) => (
                                    <TableRow
                                        key={corporate.__id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="corporate">
                                            {corporate._id}
                                        </TableCell>
                                        <TableCell>{corporate.name}</TableCell>
                                        <TableCell>{corporate.email}</TableCell>
                                        <TableCell>{corporate.website}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                onClick={() => {
                                                    handleDelete(corporate.email);
                                                }
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <br />
                <Button
                    variant="contained"
                    onClick={() => {
                        setSection("createCorporateAdmin");
                    }
                    }
                >
                    Create Corporate
                </Button>
            </Container>
        </>
    );
}