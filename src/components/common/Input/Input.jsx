import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";

const InputArea = ({
    labelTxt,
    placeholderValue,
    type,
    value,
    onChange,
    alertTxt,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
        if (!value) setIsFocused(false);
    };

    return (
        <div className="input_area">
            <motion.label
                initial={{ y: 20, opacity: 0.6 }}
                animate={isFocused || value ? { y: -18, opacity: 1 } : { y: 20, opacity: 0.6 }}
                transition={{ duration: 0.1 }}
                className="floating_label"
            >
                {labelTxt}
            </motion.label>
            <div className={`input_field ${alertTxt ? "input_error" : ""}`}>
                <input
                    className="input_box"
                    placeholder={isFocused ? "" : placeholderValue} 
                    type={type}
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={onChange}
                />
            </div>
            {alertTxt && <p className="input_alert_txt">{alertTxt}</p>}
        </div>
    );
};

InputArea.propTypes = {
    placeholderValue: PropTypes.string,
    type: PropTypes.string,
    labelTxt: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    alertTxt: PropTypes.string,
};

export default InputArea;
