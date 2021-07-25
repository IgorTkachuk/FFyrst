import React, { useEffect, useState } from 'react';
import CUForm from '../CU-form';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useHistory, useParams } from 'react-router-dom';
import { AppRoute } from '../../../../common/enums';
import { getUserForUpdateAction, updateUserAction } from '../../../../store/slices/user-manage/user-manage.slice';
import { useDispatch } from 'react-redux';
import { BsChevronLeft } from 'react-icons/bs';

const UpdateUser = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { upDelStatus, user, loading, error } = useTypedSelector(state => state.user_manage);
  const { accessToken } = useTypedSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserForUpdateAction({ id, token: accessToken }));
  }, []);

  useEffect(() => {
    if (upDelStatus) {
      history.push(AppRoute.USER_MANAGE);
    }
  }, [upDelStatus]);

  return (
    <div>
      <div className='flex px-10 justify-between'>
        <div
          onClick={() => history.push(AppRoute.USER_MANAGE)}
          className='flex space-x-2 items-center hover:cursor-pointer text-custom-blue hover:text-custom-dark-blue transition duration-200'>
          <div><BsChevronLeft /></div>
          <div>Back</div>
        </div>
        <p className='font-semibold text-custom-dark-blue text-page-name'>Update user {id}</p>
        <div></div>
      </div>
      <CUForm id={id} type={'update'} initialValues={user} loading={loading} callback={updateUserAction} />
    </div>
  );
};

export { UpdateUser };
