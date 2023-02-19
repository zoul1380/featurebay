import React from "react";
import "../featureBay/appContainer.css";
export interface Props {
    title: string;
    children: string | JSX.Element | JSX.Element[];
}

export const AppCardContainer = (props: Props) => {
    const { title, children } = props;
    return (
        <div className='app-card-container'>
            <div className='app-card-header'>{title}</div>
            <div className='app-card-list'>{children}</div>
        </div>
    );
};
