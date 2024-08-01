import React from "react";
import {Button, DatePicker} from "antd";
import {PeriodSelectorType} from "./types";

export const PeriodSelector: React.FC<PeriodSelectorType> = (props) => {
    return (
        <>
            <DatePicker defaultValue={undefined}/> - <DatePicker defaultValue={undefined}/>
            <Button>Full year</Button>
            <Button>Offset year</Button>
        </>
    )
}