import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {IListItem, IHeaderUser} from './types';
import { Header } from './header';

export default {
  title: 'Views/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

const defaultBurgerItems: IListItem[] = [
  {
    label: 'Home',
  },
  {
    label: 'Search',
  },
  {
    label: 'Notifications',
  },
  {
    label: 'Messages',
  },
  {
    label: 'Bookmarks',
  },
  {
    label: 'Profile',
  },
];

const defaultDropdownItems: IListItem[] = [
  {
    label: 'Profile',
  },
  {
    label: 'Settings',
  },
  {
    label: 'Help',
  },
  {
    label: 'Log out',
  },
];

const defaultUser: IHeaderUser = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  linkToProfile: '/ivanIvanov',
  linkToAvatar: 'http://link-to-avatar/ivan-ivanov'
}

Default.args = {
  burgerItems: defaultBurgerItems,
  dropdownItems: defaultDropdownItems,
  user: defaultUser,
};
