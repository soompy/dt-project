import PropTypes from "prop-types";

const Button = ({
    height = 46,
    isEnabled = true,
    size = "sm",
    type = "square",
    theme = "",
    label,
    onClick,
}) => {
    const handleClick = () => {
        if (isEnabled && onClick) {
            onClick();
        }
    };

    return (
        <button
            className={`btn size_${size} theme_${theme} type_${type}`}
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
    type: PropTypes.oneOf(["square", "rounded"]),
    theme: PropTypes.oneOf(["primary_1", "primary_2", ""]),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Button;
