/* eslint-disable react/prop-types */
'use client'
import { Select } from "antd";

const CustomSelect = ({
  icon: Icon,
  label,
  placeholder,
  className,
  options = [],
  ...rest
}) => {
  return (
    <div className="w-full">
      {/* Dynamic Label */}
      {label && (
        <label className="block mb-2 text-gray-700 text-sm font-medium">
          {label}
        </label>
      )}

      <div className="relative">
        <Select
          size="large"
          style={{
            background: "#EEF3FF"
          }}
          placeholder={placeholder || "Select value"} // Dynamic placeholder
          className={`w-full text-[16px] bg-[#EEF3FF] text-gray-700 rounded-lg  ${className}`}
          suffixIcon={Icon && <Icon className="text-gray-500 text-xl" />} // Dynamic icon
          {...rest} // Additional props
        >
          {options.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default CustomSelect;
