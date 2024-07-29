import React, {useState} from "react";
import {Counter1} from "./counterPage/Counter1";
import {Counter5} from "./counterPage/Counter5";

export const DbSnippetsPage: React.FC = () => {
    const [ state, setState ] = useState(0);

    const increment = (by: number) => {
        setState((previousState) => previousState + by);
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>State: {state}</p>
            <Counter1 increment={increment}/>
            <Counter5 increment={increment}/>
        </div>
    )
}