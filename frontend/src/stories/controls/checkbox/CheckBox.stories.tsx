import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckBox } from './CheckBox';

export default {
  title: 'UI/Controls/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const Checked = Template.bind({});
Checked.args = {
  boxColor: 'blue',
  textColor: 'blue',
  boxSize: 'medium',
  textSize: 'medium',
  label: 'CheckBox',
  checked: true, // true is default value
};

export const UnChecked = Template.bind({});
UnChecked.args = {
  boxColor: 'blue',
  textColor: 'blue',
  boxSize: 'medium',
  textSize: 'medium',
  label: 'CheckBox',
  checked: false,
};

export const Rounded = Template.bind({});
Rounded.args = {
  boxColor: 'blue',
  textColor: 'blue',
  boxSize: 'medium',
  textSize: 'medium',
  label: 'CheckBox',
  rounded: true, // false is default value
};

export const Blue = Template.bind({});
Blue.args = {
  boxColor: 'blue',
  textColor: 'blue',
  boxSize: 'medium',
  textSize: 'medium',
  label: 'CheckBox',
  checked: true,
};

export const Red = Template.bind({});
Red.args = {
  boxColor: 'red',
  textColor: 'red',
  boxSize: 'medium',
  textSize: 'medium',
  label: 'CheckBox',
};

export const Green = Template.bind({});
Green.args = {
  boxColor: 'green',
  textColor: 'green',
  boxSize: 'medium',
  textSize: 'medium',
  label: 'CheckBox',
};

export const Small = Template.bind({});
Small.args = {
  boxColor: 'blue',
  textColor: 'black',
  boxSize: 'small',
  textSize: 'small',
  label: 'CheckBox',
};
export const Medium = Template.bind({});
Medium.args = {
  boxColor: 'blue',
  textColor: 'black',
  boxSize: 'medium',
  textSize: 'medium',
  label: 'CheckBox',
};
export const Big = Template.bind({});
Big.args = {
  boxColor: 'blue',
  textColor: 'black',
  boxSize: 'big',
  textSize: 'big',
  label: 'CheckBox',
};
export const Large = Template.bind({});
Large.args = {
  boxColor: 'blue',
  textColor: 'black',
  boxSize: 'large',
  textSize: 'large',
  label: 'CheckBox',
};

export const Combine = Template.bind({});
Combine.args = {
  boxColor: 'green',
  textColor: 'blue',
  boxSize: 'big',
  textSize: 'medium',
  label: 'CheckBox',
  rounded: true,
};
