import React, { useState, useContext, useEffect } from "react";
import { TextField, Button, Container, Box } from "@mui/material";
import { deleteUser } from "../../../../API/user";
import { SectionContext } from "../../../../Context/sectionContext";
import { getAllUsers } from "../../../../API/user";
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
                setUsers(users.filter((user) => user.email !== email));
            }
        });
    };
    return (
        <>
            <Container sx={{ py: 4 }} maxWidth="xl">
                <Box sx={{ flexGrow: 1 }}>
                    <p>All Users</p>
                    <table border="1">
                        <thead>
                            <tr>
                                <th width="10%">Id</th>
                                <th width="30%">Name</th>
                                <th width="30%">Email</th>
                                <th width="10%">Age</th>
                                <th width="20%">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user) => (
                                <tr key={user.__id}>
                                    <td >{user._id}</td>
                                    <td >{user.name}</td>
                                    <td >{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Button
                                            variant="contained"
                                            onClick={() => {
                                                handleDelete(user.email);
                                            }
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Box>
                <br />
                <Button
                    variant="contained"
                    onClick={() => {
                        setSection("createUser");
                    }
                    }
                >
                    Create User
                </Button>
            </Container>
        </>
    );
}