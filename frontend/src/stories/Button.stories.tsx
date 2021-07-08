import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'UI/Controls/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
  label: 'Button',
};

export const Red = Template.bind({});
Red.args = {
  color: 'red',
  label: 'Button',
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
};

export const Big = Template.bind({});
Big.args = {
  size: 'big',
  label: 'Button',
};
