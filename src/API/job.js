const API = process.env.REACT_APP_API_URL;

const createJob = async (data) => {
    try {
        const response = await fetch(`${API}/job/create`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        
        const result = {
            status: response.status,
            data: await response.json(),
        };
        return result;
    }
    catch (err) {
        console.log(err);
        window.alert("Error creating job");
    }
}

const getJobID = async (id) => {
    try {
        const response = await fetch(`${API}/job/${id}/`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(id),
        });
        return await response.json();
    }
    catch (err) {
        console.log(err);
    }
}

const editJob = async (data) => {
    try {
        const response = await fetch(`${API}/job/update`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    }
    catch (err) {
        console.log(err);
    }
}

const deleteJob = async (id) => {
    const data = { _id: id };
    try {
        const response = await fetch(`${API}/job/delete`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const result = {
            status: response.status,
            data: await response.json(),
        }
        return result;
    }
    catch (err) {
        console.log(err);
    }
}

// get all jobs   
const getAllJobs = async () => {
    try {
        const response = await fetch(`${API}/job/all`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return await response.json();
    }
    catch (err) {
        console.log(err);
    }
}

// get all jobs by company id
const getAllJobsByCompanyID = async (id) => {
    try {
        const response = await fetch(`${API}/job/corporate?companyId=${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        const result = {
            status: response.status,
            data: await response.json(),
        }
        return result;
    }
    catch (err) {
        console.log(err);
    }
}

export { createJob, getJobID, editJob, deleteJob, getAllJobs, getAllJobsByCompanyID };