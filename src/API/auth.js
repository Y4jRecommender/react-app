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
        const result = {
            status: response.status,
            data: await response.json(),
        };
        return result;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

export { loginWithGoogle };