import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Page/Home";
import Dashboard from "../Page/Dashboard";
import AddJob from "../Page/Corporate/AddJob";
import CreateUser from "../Page/Admin/User/CreateUser";

const Routing = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/dashboard" element={<Dashboard />} />

                {/* Corporate Routes */}
                <Route exact path="/corporate/addjob" element={<AddJob/>} />

                {/* Admin */}
                <Route exact path="/admin/user/create" element={<CreateUser />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;