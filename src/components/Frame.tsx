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
            <NavLink to={routes.home.link} style={navStyles}>ES Demo</NavLink>
            <NavLink to={routes.localUser.link} style={navStyles}>Test Users</NavLink>
            <NavLink to={routes.dbSnippets.link} style={navStyles}>DB Snippets</NavLink>
            <Outlet/>
        </>
    )
}