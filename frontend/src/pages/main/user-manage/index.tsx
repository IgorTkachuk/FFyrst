import React, { useState } from 'react';
import { Table } from '../../../stories/views/table/table';
import BtnCell from '../../../stories/views/table/cells/btnCell';
import TextCell from '../../../stories/views/table/cells/textCell';
import ImgCell from '../../../stories/views/table/cells/imgCell';
import IndicatorCell from '../../../stories/views/table/cells/indicatoCell';
import IndicatorBtnCell from '../../../stories/views/table/cells/indicatorBtnCell';
import {
  BsPencilSquare,
  BsDot,
  BsToggleOff,
  BsToggleOn,
  BsPersonPlus,
  BsChevronLeft,
  BsChevronRight,
} from 'react-icons/bs';
import { Button } from '../../../stories/controls/button/Button';
import Pagination from 'react-js-pagination';

const user = {
  isActive: true,
  id: '1',
  img: 'https://html5css.ru/w3images/avatar2.png',
  name: 'dimas',
  phone: '+380676642177',
  email: 'dimonprykh@gmail.com',
};

const user1 = {
  isActive: false,
  id: '2',
  img: 'https://html5css.ru/howto/img_avatar.png',
  name: 'maks',
  phone: '+380676642177',
  email: 'maks@gmail.com',
};

const users = [user, user1, user, user1, user, user1, user, user1];

type Filter = 'active' | 'inactive'

interface IState {
  count: number,
  activePage: number,
  search: string,
  useFilter: boolean,
  valueFilter: Filter
  itemsPerPage: number,
  data: any
}


const UserManage = () => {

  const [pageParams, setPageParams] = useState<IState>({
    activePage: 1,
    data: users,
    useFilter: false,
    itemsPerPage: 2,
    search: '',
    valueFilter: 'active',
    count: users.length,
  });

  const handlePageChange = (pageNumber: number) => {
    setPageParams({ ...pageParams, activePage: pageNumber });
  };

  return (
    <div>
      <div className={'w-full p-8 flex justify-between text-dark-txt border mt-8 rounded-md'}>
        <div className={'flex space-x-4 items-center'}>
          <h1 className={'text-5xl'}>Users</h1>
          <div>{pageParams.count} People</div>
        </div>
        <Button color={'blue'} icon={<BsPersonPlus size={24} />} />
      </div>

      <Table headers={[' ', ' ', 'Name', 'Phone', 'Email', ' ', ' ']} data={pageParams.data}>
        <IndicatorCell prop={'isActive'} title={<BsDot size={20} />} />
        <ImgCell prop={'img'} alt={'Avatar'} />
        <TextCell prop={'name'} />
        <TextCell prop={'phone'} />
        <TextCell prop={'email'} />
        <BtnCell prop={'id'} title={<BsPencilSquare size={20} />} callback={(id) => console.log('click ' + id)} />
        <IndicatorBtnCell prop={'isActive'} id={'id'} on={<BsToggleOn size={20} />} off={<BsToggleOff size={20} />}
                          callback={(id) => console.log('click ' + id)} />
      </Table>

      <div className={"flex justify-between mt-4"}>

        <select className='border-0 rounded focus:outline-non focus:ring-2 focus:ring-gray-50 focus:ring'
                defaultValue={pageParams.itemsPerPage}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>4</option>
        </select>

        <Pagination totalItemsCount={60}
                    onChange={handlePageChange}
                    activePage={pageParams.activePage}
                    itemsCountPerPage={pageParams.itemsPerPage}
                    hideFirstLastPages={true}
                    prevPageText={<BsChevronLeft size={20} />}
                    nextPageText={<BsChevronRight size={20} />}
                    disabledClass={'text-gray-300'}
                    activeClass={'border-b-2'}
                    innerClass={'flex space-x-5 items-center text-gray-500'}
        />
      </div>

    </div>
  );
};

export { UserManage };
