import React, { createContext, useState } from "react";
import { loginWithGoogle } from "../API/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const [auth, setAuth] = useState(false);
    const [auth, setAuth] = useState(true);
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [user, setUser] = useState({});
    const [role, setRole] = useState("user");
    // const [role, setRole] = useState("admin");

    const LoginGoogle = async (token) => {
        try {
            const res = await loginWithGoogle(token);
            if (res.status === 200) {
                console.log(res);
                setAuth(true);
                setEmail(res.data.email);
                setToken(token);
                setId(res.data._id);
                setName(res.data.name);
                setAuth(true);
                setUser(res.data);

                setRole(res.data.role);
                return (res.data);
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
        setUser,
        role,
        setRole
    };

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;