import { useState } from "react";
import PropTypes from "prop-types";
import { Flex, InputNumber, Radio } from "antd";

const baseStyle = {
    fontWeight: "bold",
    borderRadius: "20px",
    minHeight: "300px",
};

const FlexBox = ({ children, useRadio }) => {
    const [value, setValue] = useState("horizontal");
    const [length, setLength] = useState(4);

    return (
        <div>
            <Flex gap="large" vertical>
                {useRadio && (
                    <Radio.Group
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    >
                        <Radio value="horizontal">Horizontal</Radio>
                        <Radio value="vertical">Vertical</Radio>
                    </Radio.Group>
                )}

                <InputNumber
                    min={1}
                    max={8}
                    value={length}
                    onChange={(newLength) => setLength(Math.max(newLength, 1))}
                    style={{ marginLeft: 20 }}
                />

                <Flex gap="large" vertical={useRadio && value === "vertical"}>
                    {Array.from({ length: length }).map((_, i) => (
                        <div
                            className="flexCont"
                            key={i}
                            style={{
                                ...baseStyle,
                                backgroundColor: i % 2 ? "#ccc" : "#eee",
                            }}
                        >
                            {Array.isArray(children) ? children[i] : children}
                        </div>
                    ))}
                </Flex>
            </Flex>
        </div>
    );
};

FlexBox.propTypes = {
    children: PropTypes.node,
    useRadio: PropTypes.bool,
};

export default FlexBox;
