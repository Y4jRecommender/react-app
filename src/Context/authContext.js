import React, { createContext, useState, useReducer, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currPage, setCurrPage] = useState("home");


    const authContext = {
        currPage,
        setCurrPage,
    };

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;