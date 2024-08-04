import React from 'react';
import PropTypes from 'prop-types';
import './Button.module.css';

export interface ButtonProps {
  onClick?: () => void;
  primary?: boolean;
  label: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  primary = false,
  label,
  backgroundColor,
  size = 'medium',
}) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  const styles = {
    backgroundColor,
  };

  return (
    <button
      type="button"
      className={`button ${mode} button--${size}`}
      style={styles}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Button;
