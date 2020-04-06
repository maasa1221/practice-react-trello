import React from 'react';
import { Card, CardProps } from "../../Components/Molecules/List"
import { RouteComponentProps } from 'react-router-dom';
import { ActionDispatcher } from './Container';

interface Props extends RouteComponentProps<{}> {
    actions: ActionDispatcher
}


export const Table: React.FC<Props> = props => {
    const cardProps: CardProps = {
        textProps: { label: "Doing" },
        buttonProps: { label: "+ さらにカードを追加", buttonType: 1, width: "10rem", fontsize: "0.6rem" }
    }
    return (
        <>
            <Card {...cardProps} />
            <Card {...cardProps} />
            {/* 配列を受け取って、内部にカードを複製する */}
        </>
    );
}