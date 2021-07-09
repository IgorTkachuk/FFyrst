import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './input';

export default {
  title: 'UI/Inputs/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Big = Template.bind({});
Big.args = {
  size: 'big',
};

export const WidthAuto = Template.bind({});
WidthAuto.args = {
  size: 'widthAuto',
};

export const InputError = Template.bind({});
InputError.args = {
  meta: { touched: true, error: 'error message' },
};

export const InputWithTitle = Template.bind({});
InputWithTitle.args = {
  title: 'Test title',
};
