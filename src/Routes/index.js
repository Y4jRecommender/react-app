import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; import Login from "../Page/Auth/Login";

import Dashboard from "../Page/Dashboard";

const Routing = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/auth/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;