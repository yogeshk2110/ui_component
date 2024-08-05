import React from 'react';
import './Button.css';
export interface ButtonProps {
    onClick?: () => void;
    primary?: boolean;
    label: string;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
