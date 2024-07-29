import React, {useState} from "react";
import {Button, InputNumber} from "antd";

export type CVRRow = {
    cvr: string;
    req_id: string;
}

export type CVRListType = {
    dataChanged: (items: CVRRow[]) => void;
};

export const CVRList: React.FC<CVRListType> = (props) => {
    const [items, setItems] = useState<CVRRow[]>([]);

    const addItem = () => {
        setItems(s => [...s, { cvr: 'a', req_id: 'b' }]);
    }

    const updateItem = (index: number, value: CVRRow) => {
        setItems(s => {
            const newItems = [...s];
            newItems[index] = value;
            return newItems;
        })
    }

    return (
        <>
            <Button onClick={addItem}>Add</Button>
            <div>
                {items.map((item, index) => (
                    <ListItem cvr={item.cvr} req_id={item.req_id} updateItem={(value) => updateItem(index, value)}></ListItem>
                ))}
            </div>
        </>
    )
}

type CVRRowUpdatable = CVRRow & { updateItem: (value: CVRRow) => void; };

export const ListItem: React.FC<CVRRowUpdatable> = (props) => {
    return (
        <div>
            <InputNumber value={props.cvr} onBlur={() => props.updateItem({ cvr: 'cvr', req_id: 'req' })}/>
            <InputNumber value={props.req_id}/>
            <Button>XML</Button>
            <Button>(Icon)</Button>
        </div>
    )
}