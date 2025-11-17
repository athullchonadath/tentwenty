import React from "react";

export interface AppCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppCheckbox: React.FC<AppCheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  className = "",
}) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={`checkbox checkbox-primary ${className}`}
      />

      {label && (
        <label htmlFor={id} className="text-sm text-black text-base-content cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};

export default AppCheckbox;
