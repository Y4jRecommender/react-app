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
        console.log(response.user);
        console.log(response.message);
        return await response.user;
    }
    catch (err) {
        console.log(err);
    }
}

export { loginWithGoogle };