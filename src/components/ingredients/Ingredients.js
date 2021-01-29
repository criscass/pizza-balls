import React from 'react';
import classes from './Ingredients.module.css';

export default function Ingredients(props) {





    return (
        <div className={classes.List}>
            <p>To make {props.balls} balls you need:</p>
            <ul>
                <li>Water : {props.water} ml</li>
                <li>Flour : {props.flour} g</li>
                <li>Yeast : {props.yeast} g</li>
                <li>Salt : {props.salt} g</li>
            </ul>

        </div>
    )
}
