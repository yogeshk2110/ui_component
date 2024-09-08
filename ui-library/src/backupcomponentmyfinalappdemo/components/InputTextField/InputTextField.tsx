import React, { useEffect, useState } from 'react';
import './InputTextField.scss';

import { MdErrorOutline ,MdCheckCircleOutline,} from "react-icons/md";
import { IoMdEyeOff,IoMdEye } from "react-icons/io";


export interface InputTextFieldProps {
    type?: 'text' | 'password';
    size?: 'large' | 'medium' | 'small';
    label?: string;
    placeholder?: string;
    value?: string;
    errorMessage?: string;
    successMessage?: string;
    readOnly?: boolean;
    disabled?: boolean;
    icon?: JSX.Element;
    currency?: string;
    onChange?: (value: string) => void;
}

const InputTextField: React.FC<InputTextFieldProps> = ({
    type = 'text',
    size = 'medium',
    label,
    placeholder,
    value = '',
    errorMessage,
    successMessage,
    readOnly = false,
    disabled = false,
    icon,
    currency,
    onChange
}) => {
    const [inputValue, setInputValue] = useState(value);
    const [isActive, setIsActive] = useState(false);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
        if (newValue.trim()) {
            setIsActive(true);
        } 
    };

    const handleFocus = () => {
        setIsActive(true);
    };

    const handleBlur = () => {
        setIsActive(false);
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const inputType = type === 'password' && !isPasswordVisible ? 'password' : 'text';

    const inputClasses = `
        input-text-field
        ${size.toLowerCase()}
        ${isActive ? 'active' : 'default'}
        ${errorMessage ? 'error' : ''}
        ${successMessage ? 'success' : ''}
        ${readOnly ? 'read-only' : ''}
        ${disabled ? 'disabled' : ''}
    `;

    const inputPaddingLeft = icon ? (size === 'large' ? '40px' : '36px') : '16px';
    const inputPaddingRight = currency || type === 'password' ? (size === 'large' ? '50px' : '45px') : '16px';


    return (
        <div className={`input-text-field-container ${size.toLowerCase()}`}>
            {label && <label className="input-label">{label}</label>}
            <div className="input-wrapper">
                {size !== 'small' && icon && <span className={`input-icon ${size.toLowerCase()}`}>{icon}</span>}
                <input
                    type={inputType}
                    className={inputClasses}
                    placeholder={placeholder}
                    value={inputValue}
                    readOnly={readOnly}
                    disabled={disabled}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                    style={{
                        paddingLeft: inputPaddingLeft, 
                        paddingRight: inputPaddingRight,
                    }}
                />
                {type === 'password' && (
                    <span
                        className={`password-toggle-icon ${size.toLowerCase()}`}
                        onClick={togglePasswordVisibility}
                        // style={{ cursor: 'pointer', position: 'absolute', right: '8px' }}
                    >
                        {isPasswordVisible ? <IoMdEye /> : <IoMdEyeOff/>}
                    </span>
                )}
                {currency && <span className={`input-currency ${size.toLowerCase()}`}>{currency}</span>}
            </div>
            {errorMessage && (
                <span className="error-message">
                    <MdErrorOutline className="error-icon" />
                    {errorMessage}
                </span>
            )}
            {successMessage && (
                <span className="success-message">
                    <MdCheckCircleOutline className="success-icon" />
                    {successMessage}
                </span>
            )}
        </div>
    );
};

export default InputTextField;
