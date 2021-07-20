import React from 'react'

import { Header } from 'components/Header/Header';
import { Tab, TabsList } from 'components/Tabs';

const defaultUser = {
  firstName: 'Antananis',
  lastName: 'Papastatopuolous',
  linkToAvatar: 'http://link-to-avatar/ivan-ivanov'
}

const Paragraph = () => (
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam labore asperiores repellat saepe dignissimos aliquid, excepturi quaerat at quam, architecto eaque sit iste voluptas tempore sint, cupiditate unde ducimus possimus earum natus eum! Consequuntur ad praesentium nesciunt aut eveniet voluptate dignissimos eos vitae nihil eaque natus labore perspiciatis exercitationem provident deleniti ab similique cupiditate voluptas iste, accusantium nostrum, nisi quibusdam amet. Eaque fuga atque distinctio est ullam dignissimos quis minus tempora enim reprehenderit. Nemo possimus eum praesentium, laborum voluptatum, culpa iusto natus voluptates harum, nam fuga. Nihil tempora consequuntur voluptates magni voluptatum quasi, sunt cupiditate, architecto veniam exercitationem, quam inventore quod repellat maiores veritatis! Odit, possimus accusantium quae ut animi aspernatur atque provident error, tempora maxime deleniti voluptate voluptatibus necessitatibus odio blanditiis quasi beatae obcaecati dolore! Possimus quaerat expedita fugiat culpa, enim recusandae sint cumque. Commodi maiores optio perspiciatis! Natus pariatur earum quam ipsum suscipit reiciendis totam quod magni porro repudiandae sapiente ducimus vero voluptas quia maiores ab quae aspernatur minima odio labore itaque, obcaecati officiis repellendus esse! Repudiandae cupiditate non iste quibusdam odio perferendis vitae accusamus architecto nulla quasi aliquam aspernatur libero voluptatibus modi illum obcaecati itaque veritatis animi, quod rem! Placeat eaque sunt hic voluptatum autem ab cupiditate.</p>
)

const PlatformEdit = () => {
  return (
    <div className="p-5">
      <h1 className='text-4xl my-4 tracking-wide'>Edit Platform</h1>
      <TabsList>
        <Tab label='Fruit'>
          <div className='smt'>
            <ul>
              <li>apple</li>
              <li>banana</li>
              <li>melon</li>
              <li>orange</li>
            </ul>
          </div>
        </Tab>
        <Tab label='Animal'>
          <div className='smt'>
            <ul className='border border-red-500'>
              <li>cow</li>
              <li>dog</li>
              <li>parrot</li>
              <li>horse</li>
            </ul>
          </div>
        </Tab>
        <Tab label='Info'>
          <Paragraph />
        </Tab>
      </TabsList>
    </div>
  )
}

export { PlatformEdit }
