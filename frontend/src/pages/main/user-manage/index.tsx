import React, { useEffect } from 'react';
import { Table } from '../../../stories/views/table/table';
import BtnCell from '../../../stories/views/table/cells/btnCell';
import TextCell from '../../../stories/views/table/cells/textCell';
import ImgCell from '../../../stories/views/table/cells/imgCell';
import IndicatorCell from '../../../stories/views/table/cells/indicatoCell';
import IndicatorBtnCell from '../../../stories/views/table/cells/indicatorBtnCell';
import { UserManageActionCreator } from '../../../store/slices';
import {
  BsPencilSquare, BsDot, BsToggleOff, BsToggleOn,
  BsPersonPlus, BsChevronLeft, BsChevronRight, BsSearch,
} from 'react-icons/bs';
import { Button } from '../../../stories/controls/button/Button';
import Pagination from 'react-js-pagination';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import CustomSelectForPagination from './select';
import { getPaginationUsersAction } from '../../../store/slices/user-manage/user-manage.slice';
import Spinner from '../../../components/spinner/spinner';
import ErrorBoundary from '../../../components/errorBoundry/errorBoundry';

const opt = [{ title: '1', value: '1' }, { title: '2', value: '2' }, { title: '4', value: '4' }];

const UserManage = () => {

  const {
    count, activePage, itemsPerPage, search,
    data, error, loading, useFilter,
  } = useTypedSelector(state => state.user_manage);

  const { accessToken } = useTypedSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPaginationUsersAction({
      token: accessToken,
      page: activePage,
      filter: useFilter,
      search,
      limit: itemsPerPage,
    }));
  }, [useFilter, activePage]);

  useEffect(() => {
    if (search !== '') {
      const timer = setTimeout(() => {
        dispatch(getPaginationUsersAction({
          token: accessToken,
          page: activePage,
          filter: useFilter,
          search,
          limit: itemsPerPage,
        }));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [search]);

  const handlePageChange = (pageNumber: number) => {
    dispatch(UserManageActionCreator.changePage(pageNumber));
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(UserManageActionCreator.changeUseFilter(e.target.value));
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(UserManageActionCreator.changeFormState(e.target.value));
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(UserManageActionCreator.changeItemsPerPage(e.target.value));
  };

  return (
    <div>
      <header className={'w-full p-8 flex justify-between text-dark-txt border mt-8 rounded-md'}>
        {/*NAME AND STATISTIC*/}
        <div className={'flex space-x-4 items-center'}>
          <h1 className={'text-5xl'}>Users</h1>
          <div>{count} People</div>
        </div>
        {/* SEARCH INPUT*/}
        <div className='flex space-x-2'>
          <div className='flex items-center space-x-1'>
            <div><BsSearch /></div>
            <input
              onChange={handleFormChange}
              value={search}
              className='rounded h-8 border-gray-300 text-gray-500' type='text' placeholder='...' />
          </div>
          {/* FILTERS RADIO*/}
          <div className='space-x-1 mt-3'>
            <label htmlFor='all'>All</label>
            <input onChange={handleFilterChange} name='filter' id='all' defaultChecked value='all' type='radio' />
            <label htmlFor='online'>Online</label>
            <input onChange={handleFilterChange} name='filter' value='online' type='radio' />
            <label htmlFor='offline'>Offline</label>
            <input onChange={handleFilterChange} name='filter' id='offline' value='offline' type='radio' />
          </div>
        </div>
        {/*ADD BUTTON*/}
        <Button color={'blue'} icon={<BsPersonPlus size={24} />} />
      </header>
      {/*DISPLAY TABLE*/}
      {!loading ? <Table headers={[' ', ' ', 'Name', 'Phone', 'Email', ' ', ' ']} data={data}>
        <IndicatorCell prop={'isActive'} title={<BsDot size={20} />} />
        <ImgCell prop={'img'} alt={'Avatar'} />
        <TextCell prop={'name'} />
        <TextCell prop={'phone'} />
        <TextCell prop={'email'} />
        <BtnCell prop={'id'} title={<BsPencilSquare size={20} />} callback={(id) => console.log('click ' + id)} />
        <IndicatorBtnCell prop={'isActive'} id={'id'} on={<BsToggleOn size={20} />} off={<BsToggleOff size={20} />}
                          callback={(id) => console.log('click ' + id)} />
      </Table> : <Spinner />}
      {/*ERROR BOUNDARY*/}
      {error && <ErrorBoundary message={error} />}
      {/*PAGINATION AND SELECT*/}
      <div className={'flex justify-between mt-4'}>
        <CustomSelectForPagination
          options={opt}
          onChange={handleItemsPerPageChange}
          defaultValue={itemsPerPage} />
        <Pagination totalItemsCount={count}
                    onChange={handlePageChange}
                    activePage={activePage}
                    itemsCountPerPage={itemsPerPage}
                    hideFirstLastPages={true}
                    prevPageText={<BsChevronLeft size={20} />}
                    nextPageText={<BsChevronRight size={20} />}
                    disabledClass={'text-gray-300'}
                    activeClass={'border-b-2'}
                    innerClass={'flex space-x-5 items-center text-gray-500'} />
      </div>
    </div>
  );
};

export { UserManage };
