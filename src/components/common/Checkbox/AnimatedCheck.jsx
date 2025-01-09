import { useState } from "react";
import { motion } from "framer-motion";

const AnimatedCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked((prev) => !prev);
    };

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>            
            <div
                onClick={handleCheckboxChange}
                style={{
                    width: "24px",
                    height: "24px",
                    border: "2px solid $primary_1",
                    borderRadius: "4px",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                }}
            >                
                {isChecked && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#007BFF",
                        }}
                    />
                )}                
                <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isChecked ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "18px",
                        height: "18px",
                    }}
                >
                    <motion.path d="M5 12l5 5L19 7" />
                </motion.svg>
            </div>
            
            <label
                onClick={handleCheckboxChange}
                style={{
                    fontSize: "16px",
                    cursor: "pointer",
                    userSelect: "none",
                }}
            >
                체크
            </label>
        </div>
    );
};

export default AnimatedCheckbox;
