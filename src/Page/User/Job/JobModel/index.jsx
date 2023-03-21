import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: "scroll",
};

export default function JobModalUser(jobs) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>View Details</Button>
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

                        <table border="1">
                            <tbody>
                                <tr>
                                    <td>Job Title</td>
                                    <td>{jobs.job.jobTitle}</td>
                                </tr>
                                <tr>
                                    <td>Job Location</td>
                                    <td>{jobs.job.jobLocation}</td>
                                </tr>
                                <tr>
                                    <td>Company Name</td>
                                    <td>{jobs.job.companyName}</td>
                                </tr>
                                <tr>
                                    <td>Company Id</td>
                                    <td>{jobs.job.companyID}</td>
                                </tr>
                                <tr>
                                    <td>Job Code</td>
                                    <td>{jobs.job.jobCode}</td>
                                </tr>
                                <tr>
                                    <td>Job Description</td>
                                    <td>{jobs.job.jobDesc}</td>
                                </tr>
                                <tr>
                                    <td>Job Type</td>
                                    <td>{jobs.job.jobType}</td>
                                </tr>
                                <tr>
                                    <td>Start Date</td>
                                    <td>{jobs.job.startDate}</td>
                                </tr>
                                <tr>
                                    <td>End Date</td>
                                    <td>{jobs.job.endDate}</td>
                                </tr>                                
                                <tr>
                                    <td>Experience</td>
                                    <td>{jobs.job.experience}</td>
                                </tr>
                                <tr>
                                    <td>Qualification</td>
                                    <td>{jobs.job.qualificationIds}</td>
                                </tr>
                                <tr>
                                    <td>Responsibilities</td>
                                    <td>{jobs.job.responsibilities}</td>
                                </tr>
                                <tr>
                                    <td>Facilities</td>
                                    <td>{jobs.job.facilities}</td>
                                </tr>
                                <tr>
                                    <td>Skills</td>
                                    <td>{jobs.job.skillSet}</td>
                                </tr>
                                <tr>
                                    <td>Language</td>
                                    <td>{jobs.job.languages}</td>
                                </tr>
                                <tr>
                                    <td>Disability Type</td>
                                    <td>{jobs.job.disabilityTypeId}</td>
                                </tr>
                                <tr>
                                    <td>Corporate Status</td>
                                    <td>{jobs.job.corporateStatus}</td>
                                </tr>
                                <tr>
                                    <td>Annual Salary</td>
                                    <td>{jobs.job.annualSalary}</td>
                                </tr>
                                <tr>
                                    <td>Incentives</td>
                                    <td>{jobs.job.incentives}</td>
                                </tr>
                                <tr>
                                    <td>Age</td>
                                    <td>{jobs.job.age}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Typography>
                    <Button onClick={handleClose} variant="contained">Close</Button>
                </Box>
            </Modal>
        </div>
    );
}