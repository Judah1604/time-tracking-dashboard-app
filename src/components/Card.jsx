import { motion } from "framer-motion";

function Card({ period, timeframes }) {
    const optimizedTitle = period.title.toLowerCase().split(" ").join("-");

    return (
        <div className={"card " + optimizedTitle}>
            <motion.div
                className="top"
                initial={{ y: 35 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
            >
                <img
                    src={"/assets/images/icon-" + optimizedTitle + ".svg"}
                    alt={period.title}
                />
            </motion.div>
            <div className="details">
                <div className="name">
                    <p>{period.title}</p>
                    <img src="/images/icon-ellipsis.svg" alt="Ellipsis" />
                </div>
                {timeframes === "daily" ? (
                    <>
                        <h1>{period.timeframes.daily.current}hrs</h1>
                        <p>Last Week: {period.timeframes.daily.previous}hrs</p>
                    </>
                ) : timeframes === "weekly" ? (
                    <>
                        <h1>{period.timeframes.weekly.current}hrs</h1>
                        <p>Last Week: {period.timeframes.weekly.previous}hrs</p>
                    </>
                ) : timeframes === "monthly" ? (
                    <>
                        <h1>{period.timeframes.monthly.current}hrs</h1>
                        <p>
                            Last Week: {period.timeframes.monthly.previous}hrs
                        </p>
                    </>
                ) : null}
            </div>
        </div>
    );
}

export default Card;
