import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
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

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: 'medium',
  label: 'Primary Button',
  backgroundColor:'red'
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  size: 'medium',
  label: 'Secondary Button',
};

export const Small = Template.bind({});
Small.args = {
  primary: true,
  size: 'small',
  label: 'Small Button',
};

export const Medium = Template.bind({});
Medium.args = {
  primary: true,
  size: 'medium',
  label: 'Medium Button',
};

export const Large = Template.bind({});
Large.args = {
  primary: true,
  size: 'large',
  label: 'Large Button',
};
