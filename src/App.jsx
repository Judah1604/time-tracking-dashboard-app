import { useState } from "react";
import "./Styles/base/common.css";
import Cards from "./components/Cards";
import Personal from "./components/Personal";

function App() {
    const [timeframes, setTimeframes] = useState("daily" || "weekly" || "monthly");
    return (
        <>
            <Personal timeframes={timeframes} setTimeframes={setTimeframes} />
            <Cards timeframes={timeframes} />
        </>
    );
}

export default App;
