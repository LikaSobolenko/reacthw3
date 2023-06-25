import React, { useState } from "react";

import "./Card.css";

function Card(props) {
    const [chosen, setChosen] = useState(props.chosen || true);
    const handleChange = () => {
        setChosen(!chosen);
    };
    return (
        <div
            onClick={handleChange}
            className={`container ${chosen ? "" : "selected"}`}
        >
            <div
                className={`unlimited ${props.unlimitedcolor} ${
                    chosen ? "" : "selectedhead"
                }`}
            >
                Безлимитный {props.price}
            </div>
            <div
                className={`price-container ${props.pricecolor} ${
                    chosen ? "" : "selected"
                }`}
            >
                <div className="price">
                    <sup className="rub">руб</sup> <span>{props.price}</span>
                    <sub className="time">/мес</sub>
                </div>
            </div>
            <div className={`speed ${chosen ? "" : "selected"}`}>
                `до {props.speed} Мбит/сек`
            </div>
            <div className={`info ${chosen ? "" : "selected"}`}>
                Объем включенного трафика не ограничен
            </div>
        </div>
    );
}

export default Card;
