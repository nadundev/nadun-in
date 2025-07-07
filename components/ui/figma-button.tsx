import React from "react";

interface FigmaButtonProps {
  href: string;
  className?: string;
  disabled?: boolean;
}

const FigmaButton: React.FC<FigmaButtonProps> = ({ href, className = "", disabled = false }) => {
  const handleClick = () => {
    if (!disabled) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 font-mono text-sm font-medium ${
        disabled 
          ? 'bg-gray-50 text-gray-400 cursor-not-allowed' 
          : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900'
      } ${className}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
      >
        <path
          d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5Z"
          fill={disabled ? "#D1D5DB" : "#F24E1E"}
        />
        <path
          d="M12 2h3.5A3.5 3.5 0 0 1 19 5.5v0A3.5 3.5 0 0 1 15.5 9H12V2Z"
          fill={disabled ? "#D1D5DB" : "#FF7262"}
        />
        <path
          d="M12 12.5A3.5 3.5 0 0 1 15.5 9H19a3.5 3.5 0 0 1 0 7h-3.5A3.5 3.5 0 0 1 12 12.5Z"
          fill={disabled ? "#D1D5DB" : "#1ABCFE"}
        />
        <path
          d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5Z"
          fill={disabled ? "#D1D5DB" : "#0ACF83"}
        />
        <path
          d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0Z"
          fill={disabled ? "#D1D5DB" : "#FF7262"}
        />
      </svg>
      View Design
    </button>
  );
};

export default FigmaButton; 