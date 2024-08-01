import React from "react";
import {Select} from "antd";
import {Paragraphs, ParagraphType} from "../../config/paragraphs";

export type ParagraphSelectorProps = {
    paragraph?: ParagraphType;
    setParagraph: (ParagraphType: ParagraphType) => void;
}

export const ParagraphSelector: React.FC<ParagraphSelectorProps> = (props) => {

    const handleChange = (value: string) => {
        props.setParagraph(value as ParagraphType);
    }

    return (
        <>
            <Select value={props.paragraph} onChange={handleChange}>
                {Object.entries(Paragraphs).map(([key, value]) => (
                    <Select.Option key={key} value={key}>{value}</Select.Option>
                ))}
            </Select>
        </>
    )
}