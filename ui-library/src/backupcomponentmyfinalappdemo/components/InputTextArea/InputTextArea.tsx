import React, { useEffect, useState } from 'react';
import './InputTextArea.scss';

import { MdCheckCircleOutline, MdErrorOutline } from 'react-icons/md';

export interface InputTextAreaProps {
    size?: 'large' | 'medium' | 'small';
    label?: string;
    placeholder?: string;
    value?: string;
    errorMessage?: string;
    successMessage?: string;
    readOnly?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
}

const InputTextArea: React.FC<InputTextAreaProps> = ({
    size = 'medium',
    label,
    placeholder,
    value = '',
    errorMessage,
    successMessage,
    readOnly = false,
    disabled = false,
    onChange
}) => {
    const [inputValue, setInputValue] = useState(value);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

    const textareaClasses = `
        text-area
        ${size.toLowerCase()}
        ${isActive ? 'active' : 'default'}
        ${errorMessage ? 'error' : ''}
        ${successMessage ? 'success' : ''}
        ${readOnly ? 'read-only' : ''}
        ${disabled ? 'disabled' : ''}
        ${!isActive && !errorMessage ? 'default' : ''} 
    `;

    return (
        <div className={`text-area-container ${size.toLowerCase()}`}>
            {label && <label className="text-area-label">{label}</label>}
            <textarea
                className={textareaClasses}
                placeholder={placeholder}
                value={inputValue}
                readOnly={readOnly}
                disabled={disabled}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
            />
            {errorMessage && (
                <span className="error-message">
                    <MdErrorOutline className="error-icon" />
                    {errorMessage}
                </span>
            )}
            {/* {errorMessage && (<span className="error-message">{errorMessage}</span>)} */}
            {/* {successMessage && (<span className="success-message">{successMessage}</span>)} */}
            {successMessage && (
                <span className="success-message">
                    <MdCheckCircleOutline className="success-icon" />
                    {successMessage}
                </span>
            )}
        </div>
    );
};

export default InputTextArea;
