import React from "react";
import {Button, DatePicker} from "antd";

export type PeriodSelectorType = {
    update: (start: Date, end: Date) => void;
};

export const PeriodSelector: React.FC<PeriodSelectorType> = (props) => {
    return (
        <>
            <DatePicker defaultValue={undefined}/> - <DatePicker defaultValue={undefined}/>
            <Button>Full year</Button>
            <Button>Offset year</Button>
        </>
    )
}