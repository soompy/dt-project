import PropTypes from "prop-types";
import "../../../styles/cp/button.scss";

const Button = ({ height = 46, isEnabled = true, size = "sm", theme = "", label, onClick }) => {
    const handleClick = () => {
        if (isEnabled && onClick) {
            onClick();
        }
    };

    return (
        <button
            className={`lms_btn size_${size} theme_${theme}`}
            style={{ height: `${height}px` }}
            onClick={handleClick}
            disabled={!isEnabled}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    height: PropTypes.number,
    isEnabled: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    theme: PropTypes.oneOf(["primary_1", "primary_2", ""]),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Button;
