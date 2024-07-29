import {Link, Outlet} from "react-router-dom";
import {routes} from "../../routes/routes";
import React from "react";

export const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Link to={routes.about.link}>About Us</Link>
            <Outlet/>
        </div>
    )
}