import React from "react";

export interface AppButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  label,
  className = "",
}) => {
  return (
    <button
      className={`w-full bg-blue-600 hover:bg-[#1A56DB]-700 text-white font-medium 
      py-[10px] px-4 rounded-lg transition-colors duration-200 
      focus:outline-none focus:ring-2 focus:ring-blue-500 
      focus:ring-offset-2 ${className}`}
    >
      {label}
    </button>
  );
};

export default AppButton;
