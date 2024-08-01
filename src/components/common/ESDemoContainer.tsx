import React, {useState} from "react";
import {PeriodSelector} from "./PeriodSelector";
import {CVRList} from "./CVRList";
import {ParagraphSelector} from "./ParagraphSelector";
import {ParagraphType} from "../../config/paragraphs";
import {CVRRow, PeriodType} from "../../model/types";
import {exportXml} from "../../logic/exportXmlUtility";

export type ESDemoType = {
    period: PeriodType;
    rows: CVRRow[];
}

export const ESDemoContainer: React.FC = () => {
    const [period, setPeriod] = useState<PeriodType>({});
    const [, setCvrRows] = useState<CVRRow[]>([]);
    const [paragraph, setParagraph] = useState<ParagraphType | undefined>();

    return (
        <>
            <PeriodSelector period={period} setPeriod={setPeriod}/><br/>
            <ParagraphSelector paragraph={paragraph} setParagraph={setParagraph}/>

            <CVRList dataChanged={setCvrRows} exportXML={(row) => exportXml('sel111', row, period)}/>
        </>
    )
}