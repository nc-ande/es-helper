import React from "react";
import {Button} from "antd";

export type Counter1Props = {
    increment: (by: number) => void;
}

export const Counter1: React.FC<Counter1Props> = (props) => {
    return (
        <div>
            Increment by 1
            <Button onClick={() => props.increment(1)}>Do it</Button>
        </div>
    )
}