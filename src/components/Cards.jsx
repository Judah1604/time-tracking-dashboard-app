import { useState } from "react";
import "../Styles/components/cards.css";
import Card from "./Card";

function Cards({ timeframes }) {
    const [data, setData] = useState([]);

    fetch("/data.json")
        .then((res) => res.json())
        .then((data) => setData(data));

    return (
        <div className="cards">
            {data.map((period, index) => (
                <Card period={period} timeframes={timeframes} key={index} />
            ))}
        </div>
    );
}

export default Cards;
