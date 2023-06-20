import React from "react";

import styles from "./Card.css";

function Card(props) {
    return (
        <div className="container selected">
            <div className={`unlimited ${props.unlimitedcolor}`}>
                Безлимитный {props.price}
            </div>
            <div className={`price-container ${props.pricecolor}`}>
                <div className="price">
                    <span className="rub">руб</span> <span>{props.price}</span>
                    <span className="time">/мес</span>
                </div>
            </div>
            <div className="speed">`до {props.speed} Мбит/сек`</div>
            <div className="info">Объем включенного трафика не ограничен</div>
        </div>
    );
}

export default Card;
