import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from './table';
import mock from './mock-data.json';

export default {
  title: 'UI/Views/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

const user = {
  img: 'https://otomatix.com.br/img/avatar/default.png',
  name: 'dimas',
  phone: '+380676642177',
  email: 'dimonprykh@gmail.com',
};

const users = [user];

export const TableDefault = Template.bind({});
TableDefault.args = {
  tableName: 'Employees',
  headers: ['Name', 'Phone', 'Email', 'Photo', 'Del'],
  data: users,
};
