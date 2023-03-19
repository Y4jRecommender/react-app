import React, { useState, useContext, useEffect } from "react";
import { Button, Container, Box } from "@mui/material";
import { deleteCorporate } from "../../../../API/corporate";
import { SectionContext } from "../../../../Context/sectionContext";
import { getAllCorporates } from "../../../../API/corporate";
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
            <Container sx={{ py: 4 }} maxWidth="xl">
                <Box sx={{ flexGrow: 1 }}>
                    <p>All Corporates</p>
                    <table border="1">
                        <thead>
                            <tr>
                                <th width="10%">Id</th>
                                <th width="30%">Name</th>
                                <th width="30%">Email</th>
                                <th width="10%">Website</th>
                                <th width="20%">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {corporate.map((corporate) => (
                                <tr key={corporate.__id}>
                                    <td >{corporate._id}</td>
                                    <td >{corporate.name}</td>
                                    <td >{corporate.email}</td>
                                    <td>{corporate.website}</td>
                                    <td>
                                        <Button
                                            variant="contained"
                                            onClick={() => {
                                                handleDelete(corporate.email);
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
                        setSection("createCorporate");
                    }
                    }
                >
                    Create Corporate
                </Button>
            </Container>
        </>
    );
}