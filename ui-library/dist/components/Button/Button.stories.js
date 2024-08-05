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
import Button from './Button';
var meta = {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        primary: {
            control: 'boolean',
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
        label: {
            control: 'text',
        },
        backgroundColor: {
            control: 'color',
        },
    },
};
export default meta;
var Template = function (args) { return _jsx(Button, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    primary: true,
    size: 'medium',
    label: 'Primary Button',
};
export var Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    size: 'medium',
    label: 'Secondary Button',
};
export var Small = Template.bind({});
Small.args = {
    primary: true,
    size: 'small',
    label: 'Small Button',
};
export var Medium = Template.bind({});
Medium.args = {
    primary: true,
    size: 'medium',
    label: 'Medium Button',
};
export var Large = Template.bind({});
Large.args = {
    primary: true,
    size: 'large',
    label: 'Large Button',
};
