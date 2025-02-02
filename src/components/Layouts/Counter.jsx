import PropTypes from "prop-types";
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

    return <span>{count}</span>;
};

Counter.propTypes = {
    targetValue: PropTypes.number,
    targetDuration: PropTypes.number,
}

export default Counter;
