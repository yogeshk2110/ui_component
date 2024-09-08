import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import InputTextArea from './InputTextArea';

export default {
    title: 'Components/InputTextArea',
    component: InputTextArea,
} as Meta<typeof InputTextArea>;

const Template: StoryFn<typeof InputTextArea> = (args) => <InputTextArea {...args} />;

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    placeholder: 'Enter text here...',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    placeholder: 'Enter text here...',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    placeholder: 'Enter text here...',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    size: 'medium',
    label: 'Label',
    placeholder: 'Enter text here...',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
    size: 'medium',
    placeholder: 'Enter text here...',
    errorMessage: 'Error Message',
};

export const SuccessState = Template.bind({});
SuccessState.args = {
    size: 'medium',
    placeholder: 'Enter text here...',
    successMessage: 'Success Message',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    size: 'medium',
    placeholder: 'Read-only text',
    readOnly: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    size: 'medium',
    placeholder: 'Disabled text',
    disabled: true,
};
