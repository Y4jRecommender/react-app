import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Stack, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: "scroll",
};

const UserDataBox = ({ data }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen} variant="contained">View Details</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        User Details
                    </Typography>
                    <Stack spacing={{ xs: 1, sm: 2 }}
                        direction="row"
                        useFlexGap
                        flexWrap="wrap"
                        sx={{ flexGrow: 1, p:2 }}
                    >
                        <Box sx={{ fontWeight: 'bold' }}>Misid:</Box>
                        <Box>{data.Misid}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>BatchId:</Box>
                        <Box>{data.BatchId}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>CandidateId:</Box>
                        <Box>{data.CandidateId}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>CandidateName:</Box>
                        <Box>{data.CandidateName}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>Email:</Box>
                        <Box>{data.Email}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>PanNumber:</Box>
                        <Box>{data.PanNumber}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>DateOfBirth:</Box>
                        <Box>{data.DateOfBirth}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>Gender:</Box>
                        <Box>{data.Gender}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>Disability:</Box>
                        <Box>{data.Disability}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>Address:</Box>
                        <Box>{data.Address}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>StateName:</Box>
                        <Box>{data.StateName}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>DistrictName:</Box>
                        <Box>{data.DistrictName}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>Pincode:</Box>
                        <Box>{data.Pincode}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>KnownName:</Box>
                        <Box>{data.KnownName}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>PreferredJobLocation:</Box>
                        <Box>{data.PreferredJobLocation}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>MaritalStatusName:</Box>
                        <Box>{data.MaritalStatusName}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>TalentName:</Box>
                        <Box>{data.TalentName}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>SkillTyping:</Box>
                        <Box>{data.SkillTyping}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>PrevTrainingProviderName:</Box>
                        <Box>{data.PrevTrainingProviderName}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>SkillsCovered:</Box>
                        <Box>{data.SkillsCovered}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>TotExpYears:</Box>
                        <Box>{data.TotExpYears}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>TotExpMonths:</Box>
                        <Box>{data.TotExpMonths}</Box>
                        <Box sx={{ fontWeight: 'bold' }}>CDate:</Box>
                        <Box>{data.CDate}</Box>
                    </Stack>
                </Box >
            </Modal >
        </>
    );
};

export default UserDataBox;