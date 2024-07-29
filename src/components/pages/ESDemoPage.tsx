import {Link} from "react-router-dom";
import {routes} from "../../routes/routes";
import React from "react";
import {ESDemoContainer} from "../common/ESDemoContainer";

export const ESDemoPage: React.FC = () => {
    return (
        <div>
            <h1>Create ES company</h1>
            <p>This tool can fill information into company template XML files and send it to the SKAT TastSelv integration.</p>

            <ESDemoContainer/>
        </div>
    )
}