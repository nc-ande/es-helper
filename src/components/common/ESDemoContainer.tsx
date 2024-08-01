import React, {useState} from "react";
import {PeriodSelector} from "./PeriodSelector";
import {CVRList} from "./CVRList";
import {CVRRow, PeriodType} from "../../model/types";
import {exportXml} from "../../logic/exportXmlUtility";

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

            <CVRList dataChanged={setCvrRows} exportXML={(row) => exportXml('sel111', row, period)}/>
        </>
    )
}