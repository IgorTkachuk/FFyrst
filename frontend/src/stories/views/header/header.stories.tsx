import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './header';

export default {
  title: 'Views/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  user: {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    linkToProfile: '/ivanIvanov',
    linkToAvatar: 'http://link-to-avatar/ivan-ivanov'
  }
};

export const LongName = Template.bind({});

LongName.args = {
  user: {
    firstName: 'Antananis',
    lastName: 'Papastatopuolous',
    linkToProfile: '/Antananis',
    linkToAvatar: 'http://link-to-avatar/ivan-ivanov'
  }
};
