import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from './table';
import mock from './mock-data.json';

export default {
  title: 'UI/Views/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const mockData = mock as Array<Array<string>>;

export const TableDefault = Template.bind({});
TableDefault.args = {
  tableName: 'Employees',
  headers: [
    'First Name',
    'Last Name',
    'Email',
    'Gender',
    'Language',
    'Company',
    'Job title',
    'Skill',
  ],
  data: mockData,
};
