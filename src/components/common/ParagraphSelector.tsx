import React from "react";
import {Select} from "antd";

export const ParagraphSelector: React.FC = () => {
    return (
        <>
            <Select onChange={onChange}>
                <Select.Option value="sample">Sample</Select.Option>
            </Select>
        </>
    )
}