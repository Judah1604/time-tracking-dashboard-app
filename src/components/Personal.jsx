import "../Styles/components/personal.css";

function Personal({ timeframes, setTimeframes }) {
    return (
        <div className="personal">
            <div className="person">
                <img src="/images/image-jeremy.png" alt="Jeremy Robson" />
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
            </div>
            <div className="time-toggle">
                <div
                    className={
                        timeframes === "daily" ? "toggle active" : "toggle"
                    }
                    onClick={() => setTimeframes("daily")}
                >
                    Daily
                </div>
                <div
                    className={
                        timeframes === "weekly" ? "toggle active" : "toggle"
                    }
                    onClick={() => setTimeframes("weekly")}
                >
                    Weekly
                </div>
                <div
                    className={
                        timeframes === "monthly" ? "toggle active" : "toggle"
                    }
                    onClick={() => setTimeframes("monthly")}
                >
                    Monthly
                </div>
            </div>
        </div>
    );
}

export default Personal;
