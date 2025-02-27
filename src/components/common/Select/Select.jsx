import { Select } from "antd";

const { Option } = Select;

const CustomSelect = ({ value, options, onChange, width = 200 }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      style={{ width }}
      dropdownStyle={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {options.map((option) => (
        <Option
          key={option.value}
          value={option.value}
          style={{ padding: "10px" }}
        >
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default CustomSelect;
