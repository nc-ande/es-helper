import React from "react";
import {PeriodSelector} from "./PeriodSelector";
import {CVRList} from "./CVRList";

export const ESDemoContainer: React.FC = () => {
    return (
        <>
            <PeriodSelector update={(start, end) => {}}/>
            <CVRList dataChanged={items => {}}/>
        </>
    )
}