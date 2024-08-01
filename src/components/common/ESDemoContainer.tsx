import React, {useState} from "react";
import {PeriodSelector} from "./PeriodSelector";
import {CVRList, CVRRow} from "./CVRList";
import {PeriodType} from "./types";

export type ESDemoType = {
    period: PeriodType;
    rows: CVRRow[];
}

export const ESDemoContainer: React.FC = () => {
    const [period, setPeriod] = useState<PeriodType>({});
    const [, setCvrRows] = useState<CVRRow[]>([]);

    return (
        <>
            <PeriodSelector period={period} setPeriod={setPeriod}/>

            <CVRList dataChanged={setCvrRows}/
        </>
    )
}