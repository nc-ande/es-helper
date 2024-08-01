import React, {useState} from "react";
import {Button, InputNumber, List} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {CVRRow} from "../../model/types";

export type CVRListType = {
    dataChanged: (items: CVRRow[]) => void;
    exportXML: (item: CVRRow) => void;
};

export const CVRList: React.FC<CVRListType> = (props) => {
    const [items, setItems] = useState<CVRRow[]>([]);

    const addItem = () => {
        setItems(s => [...s, { cvr: '', req_id: '' }]);
    }

    const updateItem = (index: number, row: CVRRow) => {
        setItems(s => {
            const newItems = [...s];
            newItems[index] = row;
            return newItems;
        })
    }

    const deleteItem = (index: number) => {
        setItems(s => {
            const newItems = [...s];
            newItems.splice(index, 1);
            return newItems;
        })
    }

    return (
        <div>
            <Button onClick={addItem}>Add</Button>
            <List dataSource={items} bordered={true} style={{ width: 'fit-content' }}>
                {items.map((value, index) => (
                    <List.Item key={index}>
                        <ListItem cvr={value.cvr} req_id={value.req_id} updateItem={row => updateItem(index, row)} deleteItem={() => deleteItem(index)} exportXML={props.exportXML}/>
                    </List.Item>
                ))}
            </List>
        </div>
    )
}

type CVRRowUpdatable = CVRRow & { updateItem: (value: CVRRow) => void; deleteItem: () => void; exportXML: (row: CVRRow) => void; };

export const ListItem: React.FC<CVRRowUpdatable> = (props) => {
    return (
        <div>
            <InputNumber key={'cvr'} style={{ width: '120px', marginRight: '10px' }} placeholder={'CVR'} value={props.cvr} onChange={value => props.updateItem({ cvr: value || '', req_id: props.req_id })}/>
            <InputNumber key={'req_id'} style={{ width: '100px', marginRight: '10px' }} placeholder={'Request ID'} value={props.req_id} onChange={value => props.updateItem({ cvr: props.cvr, req_id: value || '' })}/>
            <Button style={{ marginRight: '20px' }} onClick={() => props.exportXML(props)}>XML</Button>
            <DeleteOutlined onClick={props.deleteItem}/>
        </div>
    )
}