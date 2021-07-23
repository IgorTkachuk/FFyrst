import React from 'react'

import { Tab, TabsList } from 'components/Tabs';
import { General } from './General';

const PlatformEdit = () => {
  return (
    <div className="sm:p-3 md:p-10 shadow-xl bg-gray-50">
      <h1 className='mb-4 sm:mt-4 text-gray-700 text-2xl md:text-4xl tracking-wide'>Edit Platform</h1>
      <TabsList>
        <Tab label='General'>
          <General />
        </Tab>
        <Tab label='Sub'>
          <ul className='text-2xl'>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
            <li>item 6</li>
            <li>item 7</li>
            <li>item 8</li>
          </ul>
        </Tab>
        <Tab label='Other'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quasi voluptates libero quaerat deleniti repellendus fugit unde. Laudantium neque omnis ab nostrum eius excepturi aperiam commodi deleniti cupiditate aspernatur reprehenderit modi soluta harum, architecto debitis vitae libero voluptatibus! Pariatur libero, beatae praesentium quis qui quasi dolorum? Voluptatum illo autem, vero harum distinctio tempora error adipisci sapiente iure incidunt consequuntur eaque ipsam, perferendis pariatur! Inventore maxime officia, aliquam dolorum magnam eligendi necessitatibus reiciendis harum aut eos rem enim eius culpa delectus sunt nihil? Maiores consequatur ad voluptatem, excepturi numquam velit alias, delectus assumenda dignissimos eaque suscipit totam laudantium, aliquam fugiat voluptates. Nihil iusto id, facilis ullam nostrum cupiditate voluptatibus, cumque obcaecati sequi, non totam rerum quaerat earum dolores aliquid. Quae vitae a blanditiis doloribus, voluptatum quaerat reprehenderit iste obcaecati odit deserunt veniam reiciendis necessitatibus debitis magni praesentium, ratione quod dolorum, error nisi fugiat optio eaque recusandae? Adipisci sed odio in architecto, enim incidunt fuga! Unde quod quaerat dolorem aut quasi, amet sequi debitis ratione ipsam, porro aspernatur? Accusantium, quod architecto odit nihil illum dignissimos quidem mollitia inventore id ad minus magni fugiat esse sit quasi voluptate expedita, quos eveniet exercitationem possimus, aspernatur qui alias consectetur. Ratione eaque aliquam suscipit illo? Tenetur!</p>
        </Tab>
        <Tab label='Privacy'>
          <General />
        </Tab>
      </TabsList>
    </div>
  )
}

export { PlatformEdit }
