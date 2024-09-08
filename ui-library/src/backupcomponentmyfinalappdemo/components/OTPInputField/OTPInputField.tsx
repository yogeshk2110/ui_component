import React, { useRef, useState } from 'react';
import './OTPInputField.css';
import { MdErrorOutline, MdCheckCircleOutline } from "react-icons/md";

export interface OTPInputFieldProps {
    length?: number;
    value?: string;
    errorMessage?: string;
    successMessage?: string;
    readOnly?: boolean;
    disabled?: boolean;
    onChange?: (value: string) => void;
}

const OTPInputField: React.FC<OTPInputFieldProps> = ({
    length = 4,
    value = '',
    errorMessage,
    successMessage,
    readOnly = false,
    disabled = false,
    onChange,
}) => {
    const inputRefs = useRef<HTMLInputElement[]>(new Array(length).fill(null));
    const [inputValues, setInputValues] = useState<string[]>(Array(length).fill(''));
    const [isFocused, setIsFocused] = useState<number | null>(null);

    const focusInput = (targetIndex: number) => {
        inputRefs.current[targetIndex]?.focus();
    };

    const selectInput = (targetIndex: number) => {
        inputRefs.current[targetIndex]?.select();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, currentIndex: number) => {
        switch (event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                if (currentIndex > 0) {
                    focusInput(currentIndex - 1);
                    selectInput(currentIndex - 1);
                }
                break;
            case 'ArrowRight':
                event.preventDefault();
                if (currentIndex < length - 1) {
                    focusInput(currentIndex + 1);
                    selectInput(currentIndex + 1);
                }
                break;
            case 'Backspace':
                event.preventDefault();
                const newInputValues = [...inputValues];
                newInputValues[currentIndex] = '';  // Clear the current value
                setInputValues(newInputValues);
                if (onChange) {
                    onChange(newInputValues.join(''));
                }
                if (currentIndex > 0) {
                    focusInput(currentIndex - 1);
                    selectInput(currentIndex - 1);
                }
                break;
            default:
                break;
        }
    };
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, currentIndex: number) => {
        const currentValue = event.target.value;
        const newInputValues = [...inputValues];
        newInputValues[currentIndex] = currentValue.charAt(currentValue.length - 1);
        setInputValues(newInputValues);

        if (onChange) {
            onChange(newInputValues.join(''));
        }

        if (currentValue && currentIndex < length - 1) {
            focusInput(currentIndex + 1);
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLInputElement>, currentIndex: number) => {
        selectInput(currentIndex);
    };

    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>, currentIndex: number) => {
        event.preventDefault();
        const pastedText = event.clipboardData.getData('text/plain').trim().slice(0, length);
        const otpArray = [...inputValues];

        for (let i = 0; i < pastedText.length && currentIndex + i < length; i++) {
            otpArray[currentIndex + i] = pastedText.charAt(i);
        }
        setInputValues(otpArray);

        if (onChange) {
            onChange(otpArray.join(''));
        }
    };

    const handleFocus = (index: number) => {
        setIsFocused(index);
    };

    const handleBlur = () => {
        setIsFocused(null);
    };

    const inputClasses = (index: number) => {
        return `
            otp-input-field
            ${isFocused === index ? 'active' : 'default'}
            ${errorMessage ? 'error' : ''}
            ${successMessage ? 'success' : ''}
            ${readOnly ? 'read-only' : ''}
            ${disabled ? 'disabled' : ''}
        `;
    };

    return (
        <div className="otp-input-field-container">
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    ref={el => inputRefs.current[index] = el!}
                    id={`otp-input-${index}`}
                    type="text"
                    maxLength={1}
                    value={inputValues[index]}
                    className={inputClasses(index)}
                    readOnly={readOnly}
                    disabled={disabled}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onClick={(e) => handleClick(e, index)}
                    onPaste={(e) => handlePaste(e, index)}
                    onFocus={() => handleFocus(index)}
                    onBlur={handleBlur}
                />
            ))}
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

export default OTPInputField;
