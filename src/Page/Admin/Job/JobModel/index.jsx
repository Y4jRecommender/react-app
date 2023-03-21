import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';

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

export default function JobModalAdmin(jobs) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                                    {jobs.job.jobTitle}
                                </div>

                                <div>
                                    Job Location:
                                    {jobs.job.jobLocation}
                                </div>

                                <div>
                                    Company Name:
                                    {jobs.job.companyName}
                                </div>

                                <div>
                                    Company Id:
                                    {jobs.job.companyID}
                                </div>

                                <div>
                                    Job Code:
                                    {jobs.job.jobCode}
                                </div>

                                <div>
                                    Job Description:
                                    {jobs.job.jobDesc}
                                </div>

                                <div>
                                    Job Type:
                                    {jobs.job.jobType}
                                </div>
                                <div>
                                    Start Date:
                                    {jobs.job.startDate}
                                </div>

                                <div>
                                    End Date:
                                    {jobs.job.endDate}
                                </div>

                                <div>
                                    Experience:
                                    {jobs.job.experience}
                                </div>

                            </div>
                            <div>

                                <div>
                                    Qualification:
                                    {jobs.job.qualificationIds}
                                </div>

                                <div>
                                    Responsibilities:
                                    {jobs.job.responsibilities}
                                </div>

                                <div>
                                    Facilities:
                                    {jobs.job.facilities}
                                </div>

                                <div>
                                    Skills:
                                    {jobs.job.skillSet}
                                </div>

                                <div>
                                    Language:
                                    {jobs.job.languages}
                                </div>

                                <div>
                                    Disability Type:
                                    {jobs.job.disabilityTypeId}
                                </div>

                                <div>
                                    Annual Salary:
                                    {jobs.job.annualSalary}
                                </div>

                                <div>
                                    Incentives:
                                    {jobs.job.incentives}
                                </div>

                                <div>
                                    Age:
                                    {jobs.job.age}
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