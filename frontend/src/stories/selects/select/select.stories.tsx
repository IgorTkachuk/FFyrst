import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './select';
import mock from './mock.json';


export default {
  title: 'UI/Selects/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const mockData = mock;

export const SelectOption = Template.bind({});
SelectOption.args = {
  title: 'Test',
  options: mockData,
  isMulti: true
};
