import * as React from 'react';
import { useContext } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import { AuthContext } from '../../Context/authContext';
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

export default function JobModal(jobs) {
    const [open, setOpen] = React.useState(false);
    const authContext = useContext(AuthContext);
    const { languageId } = authContext;
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // convert 2021-03-20T11:30:05.000Z to dd/mm/yy format
    const convertDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const day = d.getDate();
        return `${day}-${month}-${year}`;
    };

    return (    
        <div>
            <Button onClick={handleOpen} variant="contained">View Details</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* Job Details Card */}
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Job Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Stack spacing={1} direction="row">

                            <div>
                                <div>
                                    Job Title:
                                    {jobs.job.jobDescription[languageId].jobTitle}
                                </div>
                                <div>
                                    Job Id:
                                    {jobs.job._id}
                                </div>
                                {/* hrEmail */}
                                <div>
                                    HR Email:
                                    {jobs.job.hrEmail}
                                </div>

                                {/* hrName */}
                                <div>
                                    HR Name:
                                    {jobs.job.jobDescription[languageId].hrName}
                                </div>

                                {/* jobDescription */}
                                <div>
                                    Job Description:
                                    {jobs.job.jobDescription[languageId].jobDescription}
                                </div>

                                {/* jobLocation */}
                                <div>
                                    Job Location:
                                    {jobs.job.jobDescription[languageId].jobLocation}
                                </div>

                                {/* jobType */}
                                <div>
                                    Job Type:
                                    {jobs.job.jobDescription[languageId].jobType}
                                </div>

                                <div>
                                    Disability Type:
                                    {jobs.job.jobDescription[languageId].disabilityType}
                                </div>

                                <div>
                                    Company Name:
                                    {jobs.job.jobDescription[languageId].companyName}
                                </div>

                                {/* jobVacancies */}
                                <div>
                                    Job Vacancies:
                                    {jobs.job.openings}
                                </div>

                                <div>
                                    Start Date:
                                    {convertDate(jobs.job.startDate)}
                                </div>

                                {/* endDate */}
                                <div>
                                    End Date:
                                    {convertDate(jobs.job.endDate)}
                                </div>

                                {/* status */}
                                <div>
                                    Status:
                                    {jobs.job.status}
                                </div>

                            </div>
                        </Stack>
                    </Typography>
                    <br />
                    <Button onClick={handleClose} variant="contained">Close</Button>
                </Box>
            </Modal>
        </div>
    );
}