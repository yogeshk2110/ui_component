import React from "react";
import "./Button.css";

import { FaHeart } from "react-icons/fa";

export interface ButtonProps {
  size?: "large" | "medium" | "small";
  variant?: "primary" | "secondary" | "tertiary";
  label: string;
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
  disabled?: boolean;
  disabled2?: boolean; // New prop for Disabled -2 state
  pressed?: boolean; // New prop for Pressed state
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  variant = "primary",
  label,
  iconLeading,
  iconTrailing,
  disabled = false,
  disabled2 = false,
  pressed = false,
  onClick, 
}) => {
  let buttonState = "";

  if (disabled) {
    buttonState = "disabled";
  } else if (disabled2) {
    buttonState = "disabled-2";
  } else if (pressed) {
    buttonState = "pressed";
  }
  return (
    <>
      <button
        className={`button ${variant} ${size} ${buttonState} ${iconTrailing ? "with-trailing-icon" : ""}`}
        disabled={disabled}
        onClick={onClick}
      >
        <span className="content">
          <span className="centered-content">
            {iconLeading && size !== "small" && (
              <span className="icon leading">{iconLeading}</span>
            )}
            <span className="label">{label}</span>
          </span>
          {iconTrailing && size !== "small" && (
            <span className="icon trailing">{iconTrailing}</span>
          )}
        </span>
      </button>
    </>
  );
};

export default Button;
