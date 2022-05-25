import React from "react";
import iconDashboard from "./analytics.svg";
import "./Sidebar.css";
import { Link } from "react-router-dom";



const Sidebar = (props) => {
    return (
        <nav className="sidenav">
            <img src={iconDashboard} alt="icone analytiques" />
            <Link to="/">FINANCES</Link>
            <Link to="/dashboard-employees">EMPLOIS</Link>
        </nav>
    );
};

export default Sidebar;