import PropTypes from "prop-types";

const InputArea = ({
    labelTxt,
    placeholderValue,
    type,
    value,
    onChange,
    alertTxt,
}) => {
    return (
        <div className="input_area">
            <label htmlFor="">{labelTxt}</label>
            <div className={`input_field ${alertTxt ? "input_error" : ""}`}>
                <input
                    className="input_box"
                    placeholder={placeholderValue}
                    type={type}
                    value={value}
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
