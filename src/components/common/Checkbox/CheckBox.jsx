import { Fragment, useState } from 'react';
import { Radio, Checkbox } from "antd";
import PropTypes from 'prop-types';

const CheckUi = ({ options, type = "radio" }) => {
  const [value, setValue] = useState(type === 'checkbox' ? [] : null);

  const onChange = (e) => {    
    if (type === "checkbox") {
      setValue(e);
    } else {
      setValue(e.target.value);
    }
  };

  return type === "radio" ? (
    <Radio.Group onChange={onChange} value={value}>
      {options.map((option, i) => (
        <Fragment key={i}>
          <Radio value={option.value}>{option.label}</Radio>
        </Fragment>
      ))}
    </Radio.Group>
  ) : (
    <Checkbox.Group onChange={onChange} value={value}>
      {options.map((option, i) => (
        <Fragment key={i}>
          <Checkbox value={option.value}>{option.label}</Checkbox>
        </Fragment>
      ))}
    </Checkbox.Group>
  );
};

CheckUi.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,  
  type: PropTypes.oneOf(["radio", "checkbox"]),
};

export default CheckUi;