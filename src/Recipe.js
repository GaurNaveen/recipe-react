import React from 'react';

// {title,calories,img} are value of the tags that are passed from App.js.
export const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src = {image} alt=""/>
        </div>
    );
}