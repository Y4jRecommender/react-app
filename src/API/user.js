const API = process.env.REACT_APP_API_URL;

const createUser = async (data) => {
    try {
        const response = await fetch(`${API}/user/create`, {
            method: "POST",
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

const getUserEmail = async (email) => {
    try {
        const response = await fetch(`${API}/user/email/`, {
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

const getUserID = async (id) => {
    try {
        const response = await fetch(`${API}/user/id/`, {
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

export { createUser, getUserEmail, getUserID };