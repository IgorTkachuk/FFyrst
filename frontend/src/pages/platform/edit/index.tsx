import React from 'react'

import { Header } from 'components/Header/Header';
import { Tab, TabsList } from 'components/Tabs';
import { General } from './General';

const defaultUser = {
  firstName: 'Antananis',
  lastName: 'Papastatopuolous',
  linkToAvatar: 'http://link-to-avatar/ivan-ivanov'
}

const PlatformEdit = () => {
  return (
    <div className="p-5">
      <h1 className='my-4 text-gray-700 text-4xl tracking-wide'>Edit Platform</h1>
      <TabsList>
        <Tab label='General'>
          <General />
        </Tab>
      </TabsList>
    </div>
  )
}

export { PlatformEdit }
