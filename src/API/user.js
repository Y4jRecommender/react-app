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

        // If the response 200, then alert the user that the account was created and redirect to the dashboard
        if (response.status === 201) {
            window.alert("Account created successfully");
        }
        const result = {
            status: response.status,
            data: await response.json(),
        };
        return result;
    }
    catch (err) {
        console.log(err);
        window.alert("Error creating user");
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

const editUser = async (data) => {
    try {
        const response = await fetch(`${API}/user/update`, {
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

export { createUser, getUserEmail, getUserID, editUser };