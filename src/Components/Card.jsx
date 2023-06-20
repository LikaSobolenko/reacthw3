import React from "react";

import styles from "./Card.css";

function Card(props) {
    return (
        <div className={`container ${props.selected}`}>
            <div
                className={`unlimited ${props.unlimitedcolor} ${props.selectedhead}`}
            >
                Безлимитный {props.price}
            </div>
            <div
                className={`price-container ${props.pricecolor} ${props.selected}`}
            >
                <div className="price">
                    <sup className="rub">руб</sup> <span>{props.price}</span>
                    <sub className="time">/мес</sub>
                </div>
            </div>
            <div className={`speed ${props.selected}`}>
                `до {props.speed} Мбит/сек`
            </div>
            <div className={`info ${props.selected}`}>
                Объем включенного трафика не ограничен
            </div>
        </div>
    );
}

export default Card;
