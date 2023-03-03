import React, { createContext, useState } from "react";
import { loginWithGoogle } from "../API/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [user, setUser] = useState({});

    const LoginGoogle = async (token) => {
        try {
            const res = await loginWithGoogle(token);
            if (res.status === 200) {
                setAuth(true);
                setEmail(res.user.email);
                setToken(token);
                setId(res.user._id);
                setName(res.user.name);
                setAuth(true);
                setUser(res.user);
                return (res.user);
            }
        }
        catch (err) {
            console.log(err);
            return err;
        }
    };

    const Logout = () => {
        setAuth(false);
        setEmail("");
        setToken("");
        setId("");
        setName("");
        setUser({});
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
        user,
        setUser
    };

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;