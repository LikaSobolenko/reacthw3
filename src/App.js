import "./App.css";

import React from "react";

import cardData from "./components/Cards";
import Card from "./components/Card";

function App() {
    return (
        <div className="App">
            {cardData.map((card, index) => (
                <div className="wraper">
                    <Card
                        key={index}
                        price={card.price}
                        speed={card.speed}
                        unlimitedcolor={card.unlimitedcolor}
                        pricecolor={card.pricecolor}
                        chosen
                    />
                </div>
            ))}
        </div>
    );
}

export default App;
