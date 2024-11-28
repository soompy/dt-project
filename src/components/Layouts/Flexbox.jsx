import { useState } from "react";
import { Flex, InputNumber, Radio } from "antd";

const baseStyle = {
  width: "25%",
  height: "10px",
};

const FlexBox = () => {
  const [value, setValue] = useState('horizontal');
  const [length, setLength] = useState(4);
  
  return (
    <div>
        <Flex gap="middle" vertical>
            <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
                <Radio value="horizontal">horizontal</Radio>
                <Radio value="vertical">vertical</Radio>
            </Radio.Group>

            <InputNumber 
                min={1}
                value={length}
                onChange={(newLength) => setLength(newLength)}
                style={{ marginLeft: 20 }}
            />
            <Flex vertical={value === 'vertical'}>
                {Array.from({
                length: length,
                }).map((_, i) => (
                <div
                    key={i}
                    style={{
                    ...baseStyle,
                    backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf',
                    }}
                />
                ))}
            </Flex>
        </Flex>
    </div>
  );
};
export default FlexBox;
