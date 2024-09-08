// import React from 'react';
// import PropTypes from 'prop-types';
// import './Button.css';

// export interface ButtonProps {
//   onClick?: () => void;
//   primary?: boolean;
//   label: string;
//   backgroundColor?: string;
//   size?: 'small' | 'medium' | 'large';
// }

// const Button: React.FC<ButtonProps> = ({
//   onClick,
//   primary = true,
//   label,
//   backgroundColor,
//   size = 'medium',
// }) => {
//   const mode = primary ? 'primary' : 'secondary';
//   const styles = {
//     backgroundColor,
//   };

//   return (
//     <button
//       type="button"
//       className={`btn ${mode} ${size}`}
//       style={styles}
//       onClick={onClick}
//     >
//       {label}
//     </button>
//   );
// };

// Button.propTypes = {
//   onClick: PropTypes.func,
//   primary: PropTypes.bool,
//   label: PropTypes.string.isRequired,
//   backgroundColor: PropTypes.string,
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
// };

// export default Button;

import React from 'react';
import './Button.css';

type ButtonSize = 'large' | 'medium' | 'small';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonState = 'default' | 'disabled' | 'disabled-2' | 'pressed';

interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  state?: ButtonState;
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  variant = 'primary',
  state = 'default',
  iconLeading,
  iconTrailing,
  children,
  onClick,
}) => {
  const disabled = state === 'disabled' || state === 'disabled-2';

  return (
    <button
      className={`btn btn-${size} btn-${variant} btn-${state}`}
      disabled={disabled}
      onClick={onClick}
    >
      {iconLeading && <span className="btn-icon-leading">{iconLeading}</span>}
      <span className="btn-content">{children}</span>
      {iconTrailing && <span className="btn-icon-trailing">{iconTrailing}</span>}
    </button>
  );
};

export default Button;

