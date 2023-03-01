const API = process.env.REACT_APP_API_URL;

// get recommendations for a user with userId and number of recommendations to return

const getRecommendations = async (userId, numRecs) => {
    try {
        const response = await fetch(`${API}/recommendation?q=${userId}&k=${numRecs}`, {
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
        return [];
    }
}

// Add a job 
const addJob = async (data) => {
    try {
        const response = await fetch(`${API}/addJob`, {
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

// Add a user
const addUser = async (data) => {
    try {
        const response = await fetch(`${API}/addUser`, {
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

export { getRecommendations, addJob, addUser };