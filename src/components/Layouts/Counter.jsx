import { useState, useEffect } from "react";
import { animate } from "framer-motion";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const controls = animate(0, 100, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (latest) => setCount(Math.round(latest)),
        });

        return () => controls.stop();
    }, []);

    return <div style={styles.count}>{count}</div>;
};

const styles = {
    count: {
        fontSize: "64px",
        color: "#4ff0b7",
    },
};

export default Counter;
