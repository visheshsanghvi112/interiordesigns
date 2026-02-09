import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 font-semibold transition-all duration-300 rounded-sm tracking-wide text-sm uppercase";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-orange-600 shadow-md hover:shadow-lg",
    outline: "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white",
    white: "bg-white text-brand-dark hover:bg-gray-100 shadow-md"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;