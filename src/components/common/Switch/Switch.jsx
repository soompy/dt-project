import { useState } from "react";
import { motion } from "framer-motion";

const SwitchCp = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <div className="switch_box" data-ison={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
        </div>
    );
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
};

export default SwitchCp;
