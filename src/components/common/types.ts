import {ReactElement} from "react";
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

export type ListType<T> = {
    initRow: () => T;
    updated: (rows: T[]) => void;
    renderRow: (row: T) => ReactElement;
}

export type UpdatableRow<T> = T & {
    update: (row: T) => void;
}