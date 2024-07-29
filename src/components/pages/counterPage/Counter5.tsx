import React from "react";
import {Button} from "antd";

export type Counter5Props = {
    increment: (by: number) => void;
}

export const Counter5: React.FC<Counter5Props> = (props) => {
    return (
        <div>
            Increment by 5
            <Button onClick={() => props.increment(5)}>Do it</Button>
        </div>
    )
}