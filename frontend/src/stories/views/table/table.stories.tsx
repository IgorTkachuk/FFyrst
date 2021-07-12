import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from './table';

export default {
  title: 'UI/Views/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const TableDefault = Template.bind({});
TableDefault.args = {
  tableName: 'Test table',
  headerData: ['Title', 'Category', 'Data', 'Quantity'],
  rowsData: [
    ['Title 1', 'Category 1', 'Data1', '1'],
    ['Title 2', 'Category 2', 'Data2', '2'],
    ['Title 3', 'Category 3', 'Data3', '3'],
    ['Title 4', 'Category 4', 'Data4', '4'],
    ['Title 5', 'Category 5', 'Data5', '5'],
  ],
};
