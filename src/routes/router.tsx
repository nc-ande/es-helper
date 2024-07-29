import { createBrowserRouter, Link } from "react-router-dom";
import {routes} from "./routes";
import {HomePage} from "../components/pages/HomePage";
import {AboutPage} from "../components/pages/AboutPage";
import {Error404Page} from "../components/pages/Error404Page";
import {Frame} from "../components/Frame";
import {CounterPage} from "../components/pages/CounterPage";

export const router = createBrowserRouter([
    {
        path: routes.home.pattern,
        element: (<Frame/>),
        children: [
            {
                index: true,
                element: (<HomePage/>),
            },
            {
                path: routes.about.pattern,
                element: (<AboutPage/>),
            },
            {
                path: routes.counter.pattern,
                element: (<CounterPage/>),
            }
        ]
    },
    {
        path: routes.notFound.pattern,
        element: (<Error404Page/>)
    }
]);