const API = process.env.REACT_APP_API_URL;

const loginWithGoogle = async (token) => {
    const data = JSON.stringify({ accessToken: token });
    try {
        const response = await fetch(`${API}/auth/google`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: data
        });
        // parse the json response
        const json = await response.json();
        // check if the response is ok
        if (response.ok) {
            // if the response is ok, return the json response
            return json;
        }
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

export { loginWithGoogle };