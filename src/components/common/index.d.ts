import {ReactElement} from "react";

export type PeriodSelectorType = {
    updated: (start: Date, end: Date) => void;
};

export type ListType<T> = {
    initRow: () => T;
    updated: (rows: T[]) => void;
    renderRow: (row: T) => ReactElement;
}

export type UpdatableRow<T> = T & {
    update: (row: T) => void;
}