import PropTypes from "prop-types";

const InputArea = ({ placeholderValue, type }) => {
  return (
    <div className="input_area">
      <div className="input_field">
        <input
          className="search_field"
          maxLength="4"
          placeholder={placeholderValue}
          type={type}
        />
      </div>
    </div>
  );
};

InputArea.propTypes = {
  placeholderValue: PropTypes.string,
  type: PropTypes.string,
};

export default InputArea;
