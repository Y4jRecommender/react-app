import React, { createContext, useState } from "react";
import { Router } from "react-router-dom";
import { loginWithGoogle } from "../API/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [id, setId] = useState("");
    const [name, setName] = useState("");

    const LoginGoogle = async (token) => {
        try {
            const res = await loginWithGoogle(token);
            if (res.status === 200) {
                console.log("Login Success");
                setAuth(true);
                setEmail(res.data.user.email);
                setToken(res.data.user.token);
                setId(res.data.id);
                setName(res.data.name);
                setAuth(true);
            }
        }
        catch (err) {
            console.log(err);
        }
    };

    const Logout = () => {
        setAuth(false);
        setEmail("");
        setToken("");
        setId("");
        setName("");
    };

    const authContext = {
        auth,
        setAuth,
        email,
        setEmail,
        token,
        setToken,
        id,
        setId,
        name,
        setName,
        LoginGoogle,
        Logout,
    };

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;