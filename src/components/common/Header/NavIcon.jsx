import { motion } from "framer-motion";
import PropTypes from "prop-types";

const NavIcon = ({ isVisible, onClick }) => {
    return (
        <svg
            viewBox="0 0 96 96"
            height="1em"
            onClick={onClick}
            style={{
                overflow: "visible",
                cursor: "pointer",
                WebkitTapHighlightColor: "rgba(0,0,0,0)",
            }}
        >
            <motion.g
                id="navicon"
                fill="none"
                stroke="currentColor"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ x: 0, y: 1 }}
                animate={{
                    x: isVisible ? 12 : 0,
                    y: isVisible ? 10 : 10,
                    rotate: isVisible ? 0 : 0,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
            >
                <line
                    transform={`translate(0, ${
                        isVisible ? -7 : -10
                    }) rotate(${isVisible ? 45 : 0}, 7, 26)`}
                    x1="7"
                    y1="26"
                    x2="89"
                    y2="26"
                    style={{
                        transition: "transform 0.5s ease-in-out",
                    }}
                />
                <line
                    transform={`translate(0, ${
                        isVisible ? 7 : 10 
                    }) rotate(${isVisible ? -45 : 0}, 7, 70)`}
                    x1="7"
                    y1="70"
                    x2="89"
                    y2="70"
                    style={{
                        transition: "transform 0.5s ease-in-out",
                    }}
                />
                <motion.line
                    x1="7"
                    y1="48"
                    x2="89"
                    y2="48"
                    animate={{
                        x: isVisible ? [-20, -200, 0] : [-200, 0],
                        opacity: isVisible ? 0 : 1,
                    }}
                    transition={{
                        x: {
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                        opacity: {
                            duration: 0.1,
                            delay: isVisible ? 0.2 : 0,
                        },
                    }}
                />
            </motion.g>

        </svg>
    );
};

NavIcon.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default NavIcon;
