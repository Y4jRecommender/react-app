const API = process.env.REACT_APP_API_URL;

const createCorporate = async (data) => {
    try {
        const response = await fetch(`${API}/corporate/create`, {
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
        window.alert("Error creating corporate");
    }
}

const getCorporateEmail = async (email) => {
    try {
        const response = await fetch(`${API}/corporate/email/`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(email),
        });
        return await response.json();
    }
    catch (err) {
        console.log(err);
    }
}

const getCorporateID = async (id) => {
    try {
        const response = await fetch(`${API}/corporate/id/`, {
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

const editCorporate = async (data) => {
    try {
        const response = await fetch(`${API}/corporate/update`, {
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

const deleteCorporate = async (email) => {
    const data = { email: email };
    try {
        const response = await fetch(`${API}/corporate/delete`, {
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

// get all corporates   
const getAllCorporates = async () => {
    try {
        const response = await fetch(`${API}/corporate/all`, {
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

// get all jobs created by a corporate
const getAllJobs = async (id) => {
    try {
        const response = await fetch(`${API}/corporate/jobs/${id}`, {
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


export { createCorporate, getCorporateEmail, getCorporateID, editCorporate, deleteCorporate, getAllCorporates, getAllJobs };