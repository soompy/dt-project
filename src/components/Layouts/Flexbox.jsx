import { useState } from "react";
import PropTypes from "prop-types";
import { Flex, InputNumber, Radio } from "antd";

const baseStyle = {  
  fontWeight: "bold",
};

const FlexBox = ({ children }) => {
  const [value, setValue] = useState("horizontal");
  const [length, setLength] = useState(4);

  return (
    <div>
      <Flex gap="middle" vertical>
        <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
          <Radio value="horizontal">Horizontal</Radio>
          <Radio value="vertical">Vertical</Radio>
        </Radio.Group>

        <InputNumber
          min={1}
          max={8}
          value={length}
          onChange={(newLength) => setLength(newLength)}
          style={{ marginLeft: 20 }}
        />

        <Flex vertical={value === "vertical"}>
          {/* Render generated div elements */}
          {Array.from({ length: length }).map((_, i) => (
            <div className="flexCont"
              key={i}
              style={{
                ...baseStyle,
                backgroundColor: i % 2 ? "#1677ff" : "#1677ffbf",
              }}
            >
              {children}
            </div>
          ))}                    
        </Flex>
      </Flex>
    </div>
  );
};

FlexBox.propTypes = {
  children: PropTypes.string,
}

export default FlexBox;
