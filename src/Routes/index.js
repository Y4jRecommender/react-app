import { React, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Page/Home";
import Dashboard from "../Page/User/Dashboard";
import AddJob from "../Page/Corporate/AddJob";
import CorporateDashboard from "../Page/Corporate/Dashboard";
import AdminDashBoard from "../Page/Admin/Dashboard";
import CreateUser from "../Page/Admin/User/CreateUser";
import { AuthContext } from "../Context/authContext";
const Routing = () => {
    const { auth, role } = useContext(AuthContext);
    return (

        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                {!auth && (
                    <>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="*" element={<Home />} />
                    </>
                )}

                {/* User Routes */}
                {auth && role === "user" && (
                    <>
                        <Route exact path="/dashboard" element={<Dashboard />} />
                        <Route exact path="*" element={<Dashboard />} />
                    </>
                )}

                {auth && role === "corporate" && (
                    <>
                        <Route exact path="/corporate/dashboard" element={<CorporateDashboard />} />
                        <Route exact path="/corporate/addjob" element={<AddJob />} />
                        <Route exact path="/corporate/*" element={<CorporateDashboard />} />
                    </>
                )}

                {auth && role === "admin" && (
                    <>
                        <Route exact path="/admin/dashboard" element={<AdminDashBoard />} />
                        <Route exact path="/admin/user/create" element={<CreateUser />} />
                        <Route exact path="/admin/*" element={<AdminDashBoard />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;