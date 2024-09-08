import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import OTPInputField,{OTPInputFieldProps} from './OTPInputField'; 

export default {
  title: 'Components/OTPInputField',
  component: OTPInputField,
} as Meta;

const Template: StoryFn<OTPInputFieldProps> = (args) => <OTPInputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  length: 4,
  value: '',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  length: 4,
  value: '',
  errorMessage: 'Invalid OTP',
};

export const SuccessState = Template.bind({});
SuccessState.args = {
  length: 4,
  value: '1234',
  successMessage: 'OTP Verified!',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  length: 4,
  value: '1234',
  readOnly: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  length: 4,
  value: '',
  disabled: true,
};

export const PreFilled = Template.bind({});
PreFilled.args = {
  length: 4,
  value: '5678',
};

