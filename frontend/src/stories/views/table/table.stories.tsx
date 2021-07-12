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
  tableName: 'Employees',
  headerData: ['Name', 'Position', 'Office', 'Age', 'Start date', 'Salary'],
  rowsData: [
    [
      'Angelica Ramos',
      'Chief Executive Officer',
      'San Francisco',
      '55',
      '2009/01/12',
      '$95,000',
    ],
    [
      'Bradley Greer',
      'Software Engineer',
      'London',
      '41',
      '2012/10/13',
      '$60,000',
    ],
    [
      'Ashton Cox',
      'Junior Technical Author',
      'New York',
      '29',
      '2012/12/02',
      '$55,000',
    ],
    [
      'Bruno Nash',
      'Pre-Sales Support',
      'New York',
      '26',
      '2011/12/12',
      '$48,000',
    ],
    [
      'Caesar Vance',
      'Sales Assistant',
      'Edinburgh',
      '31',
      '2012/03/29',
      '$58,000',
    ],
  ],
};
