import {Dayjs} from "dayjs";

export type PeriodType = {
    start?: Dayjs;
    end?: Dayjs;
    year?: number;
}

export type PeriodSelectorType = {
    period: PeriodType;
    withYear?: boolean;
    setPeriod: (period: PeriodType) => void;
};

export type CVRRow = {
    cvr: string;
    req_id: string;
};