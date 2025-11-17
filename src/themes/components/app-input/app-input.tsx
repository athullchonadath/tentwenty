import React from "react";

export interface AppInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

const AppInput: React.FC<AppInputProps> = ({
  id,
  type = "text",
  value,
  placeholder,
  onChange,
  label,
  className = "",
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-[14px] font-medium text-gray-900 mb-2"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full px-[16px] py-[12px] border border-gray-300 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        focus:border-transparent transition-all ${className}`}
      />
    </div>
  );
};

export default AppInput;
 