import "../Styles/components/personal.css";
import { motion } from "framer-motion";

function Personal({ timeframes, setTimeframes }) {
    const toggleNames = ["daily", "weekly", "monthly"];

    return (
        <div className="personal">
            <div className="person">
                <img src="/images/image-jeremy.png" alt="Jeremy Robson" />
                <div className="text">
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <div className="time-toggle">
                {toggleNames.map((name, index) => (
                    <motion.div
                        className={
                            timeframes === name ? "toggle active" : "toggle"
                        }
                        onClick={() => setTimeframes(name)}
                        initial={{y: 25, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: index * 0.1}}
                        viewport={{once: true}}
                        key={index}
                    >
                        {name}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Personal;
