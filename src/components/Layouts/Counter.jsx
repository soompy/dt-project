import { useState, useEffect } from "react";
import { animate } from "framer-motion";

const Counter = ({ targetValue, targetDuration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const controls = animate(0, targetValue, {
            duration: targetDuration,
            ease: "easeOut",
            onUpdate: (latest) => setCount(Math.round(latest)),
        });

        return () => controls.stop();
    }, [targetValue, targetDuration]);

    return <div style={styles.count}>{count}</div>;
};

const styles = {
    count: {
        fontSize: "64px",
        color: "#4ff0b7",
    },
};

export default Counter;
