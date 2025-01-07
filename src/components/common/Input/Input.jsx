import PropTypes from "prop-types";

const InputArea = ({ labelTxt, placeholderValue, type }) => {
    return (
        <section className="login_page">
            <div className="input_area">
                <label htmlFor="">{labelTxt}</label>
                <div className="input_field">
                    <input
                        className="input_box"
                        placeholder={placeholderValue}
                        type={type}
                    />
                </div>
            </div>
        </section>
    );
};

InputArea.propTypes = {
    placeholderValue: PropTypes.string,
    type: PropTypes.string,
    labelTxt: PropTypes.string.isRequired,
};

export default InputArea;
