import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import InputTextField from './InputTextField';
import { FaHeart } from "react-icons/fa";

export default {
    title: 'Components/InputTextField',
    component: InputTextField,
} as Meta<typeof InputTextField>;

const Template: StoryFn<typeof InputTextField> = (args) => <InputTextField {...args} />;

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    placeholder: 'placeholder',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    placeholder: 'placeholder',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    placeholder: 'placeholder',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    size: 'medium',
    label: 'Label',
    placeholder: 'placeholder',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
    size: 'medium',
    placeholder: 'placeholder',
    errorMessage: 'Error Message',
};

export const SuccessState = Template.bind({});
SuccessState.args = {
    size: 'medium',
    placeholder: 'placeholder',
    successMessage: 'Success Message',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    size: 'medium',
    placeholder: 'read only',
    readOnly: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    size: 'medium',
    placeholder: 'placeholder',
    disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    size: 'medium',
    placeholder: 'placeholder',
    icon: <FaHeart/>,
};

export const WithCurrency = Template.bind({});
WithCurrency.args = {
    size: 'medium',
    placeholder: 'Enter amount...',
    currency: 'USD',
};

export const PasswordField = Template.bind({});
PasswordField.args = {
    size: 'medium',
    type: 'password', 
    placeholder: 'Enter your password...',
};