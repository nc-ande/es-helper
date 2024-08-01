import {CVRRow, PeriodType} from "../model/types";

export type ParagraphXmlProducerType = (row: CVRRow, period: PeriodType) => string;

export const exportXml = (paragraph: string, row: CVRRow, period: PeriodType) => {

}