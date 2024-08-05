var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import PropTypes from 'prop-types';
import './Button.css';
var Button = function (_a) {
    var onClick = _a.onClick, _b = _a.primary, primary = _b === void 0 ? true : _b, label = _a.label, backgroundColor = _a.backgroundColor, _c = _a.size, size = _c === void 0 ? 'medium' : _c;
    var mode = primary ? 'primary' : 'secondary';
    var styles = {
        backgroundColor: backgroundColor,
    };
    return (_jsx("button", __assign({ type: "button", className: "btn ".concat(mode, " ").concat(size), style: styles, onClick: onClick }, { children: label })));
};
Button.propTypes = {
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    label: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};
export default Button;
