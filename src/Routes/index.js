import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Page/Home";
import Dashboard from "../Page/Dashboard";

const Routing = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;