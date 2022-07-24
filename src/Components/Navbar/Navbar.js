import React, { useState } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom"
import "./Navbar.css";

import { Button } from "@mui/material"

const Navbar = () => {
    const [active, setActive] = useState(false);
    const location = useLocation()
    const params = useParams()
    const history = useHistory()

    const handleClick = () => {
        setActive(!active);
    };

    const id = params.id

    if (location.pathname.includes("admin")) {
        return (
            <nav className="navbar">
                <h1 className="navbar-logo">
                    <i class="fas fa-clinic-medical"></i> Health Center
                </h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={active ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <a href={`/admin/${id}`} className="nav-links">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href={`/admin/${id}/appointment`} className="nav-links">
                            Appointments
                        </a>
                    </li>
                    <li>
                        <a href={`/admin/${id}/profile`} className="nav-links">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-links-mobile">
                            Sign Out
                        </a>
                    </li>
                </ul>
                <Button
                    variant="contained"
                    onClick={() => {
                        history.push("/")
                        window.location.reload(true)
                    }}
                    sx={{
                        backgroundColor: "#4ad9e4",
                        "&:hover": {
                            background: '#fff',
                            color: "rgba(73, 63, 252, 1)"
                        },
                        '@media screen and (max-width: 768px)': {
                            display: "none"
                        }
                    }}
                >
                    SIGN OUT
                </Button>
            </nav>
        );
    }

    else if (location.pathname.includes("doctor")) {
        return (
            <nav className="navbar">
                <h1 className="navbar-logo">
                    <i class="fas fa-clinic-medical"></i> Health Center
                </h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={active ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <a href={`/doctor/${id}`} className="nav-links">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href={`/doctor/${id}/past-prescription`} className="nav-links">
                            Past Prescription
                        </a>
                    </li>
                    <li>
                        <a href={`/doctor/${id}/profile`} className="nav-links">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-links-mobile">
                            Sign Out
                        </a>
                    </li>
                </ul>
                <Button
                    variant="contained"
                    onClick={() => {
                        history.push("/")
                        window.location.reload(true)
                    }}
                    sx={{
                        backgroundColor: "#4ad9e4",
                        "&:hover": {
                            background: '#fff',
                            color: "rgba(73, 63, 252, 1)"
                        },
                        '@media screen and (max-width: 768px)': {
                            display: "none"
                        }
                    }}
                >
                    SIGN OUT
                </Button>
            </nav>
        );
    }

    else if (location.pathname.includes("student")) {
        return (
            <nav className="navbar">
                <h1 className="navbar-logo">
                    <i class="fas fa-clinic-medical"></i> Health Center
                </h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={active ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <a href={`/student/${id}`} className="nav-links">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href={`/student/${id}/past-appointment`} className="nav-links">
                            Past Appointments
                        </a>
                    </li>
                    <li>
                        <a href={`/student/${id}/past-prescription`} className="nav-links">
                            Past Prescription
                        </a>
                    </li>
                    <li>
                        <a href={`/student/${id}/profile`} className="nav-links">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="/" className="nav-links-mobile">
                            Sign Out
                        </a>
                    </li>
                </ul>
                <Button
                    variant="contained"
                    onClick={() => {
                        history.push("/")
                        window.location.reload(true)
                    }}
                    sx={{
                        backgroundColor: "#4ad9e4",
                        "&:hover": {
                            background: '#fff',
                            color: "rgba(73, 63, 252, 1)"
                        },
                        '@media screen and (max-width: 768px)': {
                            display: "none"
                        }
                    }}
                >
                    SIGN OUT
                </Button>
            </nav>
        );
    }
};

export default Navbar;
