import { Fragment, useState } from 'react';
import { Radio } from "antd";
import PropTypes from 'prop-types';

const CheckUi = ({ options, customStyle }) => {
  const [value, setValue] = useState(null);

  const onChange = (e) => {    
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value} style={customStyle?.group}>
      {options.map((option, i) => {
        return(
          <Fragment key={i}>
            <Radio
              key={option.value}
              value={option.value}
              style={customStyle?.radio}
            >
              {option.label}
            </Radio>
          </Fragment>        
        )        
      })}      
    </Radio.Group>
  );
};

CheckUi.propTypes = {
  options: PropTypes.array, 
  customStyle: PropTypes.object, 
  value: PropTypes.array,
  label: PropTypes.array,  
}

export default CheckUi;