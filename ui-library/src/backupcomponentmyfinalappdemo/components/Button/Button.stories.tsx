
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import { FaHeart } from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa"

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  }, 
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// Primary Button Stories
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'large',
  label: 'Button',
};

Primary.storyName = 'Primary/With large size';

export const PrimaryWithMediumSize = Template.bind({});
PrimaryWithMediumSize.args = {
    variant: 'primary',
    size: 'medium',
    label: 'Button',
};
PrimaryWithMediumSize.storyName ='Primary/With medium size'

export const PrimaryWithSmallSize = Template.bind({});
PrimaryWithSmallSize.args = {
    variant: 'primary',
    size: 'small',
    label: 'Button',
};
PrimaryWithSmallSize.storyName ='Primary/With small size'

export const PrimaryWithLeadingIcon = Template.bind({});
PrimaryWithLeadingIcon.args = {
  variant: 'primary',
  size: 'large',
  label: 'Button',
  iconLeading: <FaHeart/>,
};
PrimaryWithLeadingIcon.storyName = 'Primary/With Leading Icon';

export const PrimaryWithTrailingIcon = Template.bind({});
PrimaryWithTrailingIcon.args = {
  variant: 'primary',
  size: 'large',
  label: 'Button',
  iconTrailing: <FaArrowRight />,
};
PrimaryWithTrailingIcon.storyName = 'Primary/With Trailing Icon';

export const PrimaryWithBothIcons = Template.bind({});
PrimaryWithBothIcons.args = {
  variant: 'primary',
  size: 'large',
  label: 'Button',
  iconLeading: <FaHeart/>,
  iconTrailing: <FaArrowRight />,
};
PrimaryWithBothIcons.storyName = 'Primary/With Both Icons';

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  variant: 'primary',
  size: 'large',
  label: 'Button',
  disabled: true,
};
PrimaryDisabled.storyName = 'Primary/Disabled';

// Secondary Button Stories
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'large',
  label: 'Button',
};

Secondary.storyName = 'Secondary';

export const SecondaryWithLeadingIcon = Template.bind({});
SecondaryWithLeadingIcon.args = {
  variant: 'secondary',
  size: 'large',
  label: 'Button',
  iconLeading: <FaHeart/>,
};
SecondaryWithLeadingIcon.storyName = 'Secondary/With Leading Icon';

export const SecondaryWithTrailingIcon = Template.bind({});
SecondaryWithTrailingIcon.args = {
  variant: 'secondary',
  size: 'large',
  label: 'Button',
  iconTrailing: <FaArrowRight />,
};
SecondaryWithTrailingIcon.storyName = 'Secondary/With Trailing Icon';

export const SecondaryWithBothIcons = Template.bind({});
SecondaryWithBothIcons.args = {
  variant: 'secondary',
  size: 'large',
  label: 'Button',
  iconLeading: <FaHeart/>,
  iconTrailing: <FaArrowRight />,
};
SecondaryWithBothIcons.storyName = 'Secondary/With Both Icons';

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  variant: 'secondary',
  size: 'large',
  label: 'Button',
  disabled: true,
};
SecondaryDisabled.storyName = 'Secondary/Disabled';

// Tertiary Button Stories
export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  size: 'large',
  label: 'Done',
};

Tertiary.storyName = 'Tertiary';

export const TertiaryWithLeadingIcon = Template.bind({});
TertiaryWithLeadingIcon.args = {
  variant: 'tertiary',
  size: 'large',
  label: 'Button',
  iconLeading: <FaHeart/>,
};
TertiaryWithLeadingIcon.storyName = 'Tertiary/With Leading Icon';

export const TertiaryWithTrailingIcon = Template.bind({});
TertiaryWithTrailingIcon.args = {
  variant: 'tertiary',
  size: 'large',
  label: 'Button',
  iconTrailing: <FaArrowRight />,
};
TertiaryWithTrailingIcon.storyName = 'Tertiary/With Trailing Icon';

export const TertiaryWithBothIcons = Template.bind({});
TertiaryWithBothIcons.args = {
  variant: 'tertiary',
  size: 'large',
  label: 'Button',
  iconLeading: <FaHeart/>,
  iconTrailing: <FaArrowRight />,
};
TertiaryWithBothIcons.storyName = 'Tertiary/With Both Icons';

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  variant: 'tertiary',
  size: 'large',
  label: 'Button',
  disabled: true,
};
TertiaryDisabled.storyName = 'Tertiary/Disabled';

// Disabled -2 Stories
export const PrimaryDisabled2 = Template.bind({});
PrimaryDisabled2.args = {
  variant: 'primary',
  size: 'large',
  label: 'Button',
  disabled2: true,
};
PrimaryDisabled2.storyName = 'Primary/Disabled -2';

export const SecondaryDisabled2 = Template.bind({});
SecondaryDisabled2.args = {
  variant: 'secondary',
  size: 'large',
  label: 'Button',
  disabled2: true,
};
SecondaryDisabled2.storyName = 'Secondary/Disabled -2';

export const TertiaryDisabled2 = Template.bind({});
TertiaryDisabled2.args = {
  variant: 'tertiary',
  size: 'large',
  label: 'Button',
  disabled2: true,
};
TertiaryDisabled2.storyName = 'Tertiary/Disabled -2';

// Pressed Stories
export const PrimaryPressed = Template.bind({});
PrimaryPressed.args = {
  variant: 'primary',
  size: 'large',
  label: 'Button',
  pressed: true,
};
PrimaryPressed.storyName = 'Primary/Pressed';

export const SecondaryPressed = Template.bind({});
SecondaryPressed.args = {
  variant: 'secondary',
  size: 'large',
  label: 'Button',
  pressed: true,
};
SecondaryPressed.storyName = 'Secondary/Pressed';

export const TertiaryPressed = Template.bind({});
TertiaryPressed.args = {
  variant: 'tertiary',
  size: 'large',
  label: 'Button',
  pressed: true,
};
TertiaryPressed.storyName = 'Tertiary/Pressed';