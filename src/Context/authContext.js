import React, { createContext, useEffect, useState } from "react";
import { loginWithGoogle } from "../API/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const [auth, setAuth] = useState(false);
    const [auth, setAuth] = useState(true);
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [user, setUser] = useState({});
    const [role, setRole] = useState("admin");

    // state variable for the language
    const [language, setLanguage] = useState("en");
    const [languageId, setLanguageId] = useState(0);

    const languageMap = {
        en: 0,
        as: 1,
        hi: 2,
        mr: 3,
        ta: 4,
        bn: 5,
        kn: 6,
        or: 7,
        te: 8,
        gu: 9,
        ml: 10,
        pa: 11,
    };

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

    // update language
    const updateLanguage = (language) => {
        setLanguage(language);
        setLanguageId(languageMap[language]);
        console.log(languageMap[language]);
        Cookies.set("language", language);
    }

    // Update the language from cookie if exits
    useEffect(() => {
        const languageCookie = Cookies.get("language");
        if (languageCookie) {
            setLanguage(languageCookie);
        }
    }, []);

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
        setRole,
        language,
        updateLanguage,
        languageId,
    };

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;