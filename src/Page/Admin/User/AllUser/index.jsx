import React, { useState, useContext, useEffect } from "react";
import { Button, Container, Box, Typography, Stack } from "@mui/material";
import { deleteUser, getAllUsers } from "../../../../API/user";
import { SectionContext } from "../../../../Context/sectionContext";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserDataBox from "../../../../Component/UserDataBox";

export default function AllUserAdmin() {
    const { setSection } = useContext(SectionContext);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        // call the api to get all the users
        const result = getAllUsers();
        result.then((res) => {
            setUsers(res.users);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleDelete = (email) => {
        const result = deleteUser(email);
        result.then((res) => {
            if (res.status === 200) {
                alert("User Deleted");
                setUsers(users.filter((user) => user.Email !== email));
            }
        });
    };

    return (
        <>
            <Container maxWidth="xl">
                <Typography variant="h5" component="h5" gutterBottom sx={{ py: 2 }}>
                    <br />
                    All Users
                </Typography>
                <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Candidate ID</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((row) => (
                                    <TableRow
                                        key={row.__id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.CandidateId}
                                        </TableCell>
                                        <TableCell>{row.CandidateName}</TableCell>
                                        <TableCell>{row.Email}</TableCell>

                                        <TableCell>
                                            <Stack direction="row" spacing={2}>
                                                <Button
                                                    variant="contained"
                                                    onClick={() => {
                                                        handleDelete(row.Email);
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                                <UserDataBox data={row} />
                                            </Stack>
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
                        setSection("createUserAdmin");
                    }
                    }
                >
                    Create User
                </Button>
            </Container>
        </>
    );
}