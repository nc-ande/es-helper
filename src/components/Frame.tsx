import {Link, NavLink, NavLinkRenderProps, Outlet} from "react-router-dom";
import React from "react";
import {routes} from "../routes/routes";

export const Frame: React.FC = () => {

    const navStyles = (props: NavLinkRenderProps): React.CSSProperties => {
        return {
            color: props.isActive ? 'red' : 'inherit',
            fontWeight: props.isActive ? 'bold' : 'inherit',
            marginRight: '10px'
        };
    }

    return (
        <>
            <NavLink to={routes.home.link} style={navStyles}>Home Page</NavLink>
            <NavLink to={routes.about.link} style={navStyles}>About</NavLink>
            <NavLink to={routes.counter.link} style={navStyles}>Counter</NavLink>
            <Outlet/>
        </>
    )
}