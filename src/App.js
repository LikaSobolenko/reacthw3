import "./App.css";

import Card from "./Components/Card";

function App() {
    return (
        <div className="App">
            <Card
                price={300}
                speed={10}
                unlimitedcolor="unlimited_blue"
                pricecolor="price_blue"
            />
            <Card
                price={450}
                speed={50}
                unlimitedcolor="unlimited_green"
                pricecolor="price_green"
            />
            <Card
                price={550}
                speed={100}
                unlimitedcolor="unlimited_red"
                pricecolor="price_red"
                selected="selected"
                selectedhead="selectedhead"
            />
            <Card
                price={1000}
                speed={200}
                unlimitedcolor="unlimited_black"
                pricecolor="price_black"
            />
        </div>
    );
}

export default App;
