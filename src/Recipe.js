import React from 'react';

// {title,calories,img} are value of the tags that are passed from App.js.
export const Recipe = ({title,calories,image}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src = {image} alt=""/>
        </div>
    );
}