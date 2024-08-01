import React from "react";
import dayjs, { Dayjs } from 'dayjs'
import {Button, DatePicker, InputNumber} from "antd";
import {PeriodSelectorType} from "./types";

export const PeriodSelector: React.FC<PeriodSelectorType> = (props) => {

    const parseYear = (date: Dayjs | undefined) => {
        return date?.year();
    }

    const handleDateChange = (startDate: boolean) => (date: Dayjs) => {
        if (startDate) {
            props.setPeriod({ ...props.period, start: date });
        } else {
            props.setPeriod({ ...props.period, end: date });
        }
    }

    const handleYearChange = (year: number | null) => {
        props.setPeriod({...props.period, year: year || undefined})
    }

    const handleFullYear = () => {
        const yearValue = parseYear(props.period.start) || parseYear(props.period.end) || props.period.year;
        if (yearValue) {
            props.setPeriod({
                start: dayjs(new Date(yearValue, 0, 1)),
                end: dayjs(new Date(yearValue, 11, 31)),
                year: yearValue
            })
        }
    }

    const handleOffsetYear = () => {
        if (props.period.start) {
            const end = props.period.start.add(1, "year").subtract(1, "day");
            const aprilSecond = new Date(props.period.start.year(), 3, 2);
            props.setPeriod({
                start: props.period.start,
                end: end,
                year: props.period.start.isBefore(aprilSecond) ? aprilSecond.getFullYear() : aprilSecond.getFullYear() + 1
            });
        }
    }

    return (
        <>
            <DatePicker value={props.period?.start} onChange={handleDateChange(true)}/> - <DatePicker value={props.period?.end} onChange={handleDateChange(false)}/>
            {props.withYear && <InputNumber value={props.period?.year} onChange={handleYearChange}/>}
            <Button onClick={handleFullYear}>Full year</Button>
            <Button onClick={handleOffsetYear}>Offset year</Button>
        </>
    )
}