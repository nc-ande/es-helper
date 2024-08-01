import {CVRRow, PeriodType} from "../model/types";
import {ParagraphType} from "../config/paragraphs";
import {producer as sel111} from "./xmlProducers/sel111";
import {producer as andel} from "./xmlProducers/andel";
import {producer as fond111} from "./xmlProducers/fond111";
import {producer as fond112} from "./xmlProducers/fond112";
import {producer as asc113} from "./xmlProducers/asc113";
import {producer as asc116} from "./xmlProducers/asc116";
import {downloadXMLFile} from "./downloadFile";

export type ParagraphXmlProducerType = (row: CVRRow, period: PeriodType) => string;

const providers: Record<ParagraphType, ParagraphXmlProducerType> = {
    sel111: sel111,
    andel: andel,
    fond111: fond111,
    fond112: fond112,
    asc113: asc113,
    asc116: asc116
};

export const exportXml = (paragraph: ParagraphType, row: CVRRow, period: PeriodType) => {
    const xml = providers[paragraph](row, period);
    downloadXMLFile(xml, paragraph);
}