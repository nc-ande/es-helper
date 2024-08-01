import { createBrowserRouter, Link } from "react-router-dom";
import {basename, routes} from "./routes";
import {ESDemoPage} from "../components/pages/ESDemoPage";
import {TestUsersPage} from "../components/pages/TestUsersPage";
import {Error404Page} from "../components/pages/Error404Page";
import {Frame} from "../components/Frame";
import {DbSnippetsPage} from "../components/pages/DbSnippetsPage";

export const router = createBrowserRouter([
    {
        path: routes.home.pattern,
        element: (<Frame/>),
        children: [
            {
                index: true,
                element: (<ESDemoPage/>),
            },
            {
                path: routes.localUser.pattern,
                element: (<TestUsersPage/>),
            },
            {
                path: routes.dbSnippets.pattern,
                element: (<DbSnippetsPage/>),
            }
        ]
    },
    {
        path: routes.notFound.pattern,
        element: (<Error404Page/>)
    }
], { basename: basename });