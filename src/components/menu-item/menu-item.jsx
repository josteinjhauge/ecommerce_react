import React from 'react';
import './menu-item.scss';
import { withRouter } from "react-router-dom";

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div 
        className={`${size} menu-item`} 
        onClick ={() => 
            history.push(`${match.url}${linkUrl}`)}
    >
        <div 
            className='background-image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
        <div className='content'>
            <h1 className='title'>
                {title.toUpperCase()}
            </h1>
            <span className='subtitle'>
                Kjøp nå
            </span>
        </div>
    </div>
);

// @ts-ignore
export default withRouter(MenuItem);