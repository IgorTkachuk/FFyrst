import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { createUserAction } from '../../../../store/slices/user-manage/user-manage.slice';
import { AppRoute } from '../../../../common/enums';
import CUForm from '../CU-form';
import { BsChevronLeft } from 'react-icons/bs';

const user = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
  birthDate: new Date(),
  avatar: '',
  postalCode: '',
  stateAddress: '',
  cityAddress: '',
  streetAddress: '',
};

const CreateUser = () => {
  const history = useHistory();
  const { upDelStatus,loading, error } = useTypedSelector(state => state.user_manage);

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
        <p className='font-semibold text-custom-dark-blue text-page-name'>Create user</p>
        <div></div>
      </div>
      <CUForm type={'create'} initialValues={user} loading={loading} callback={createUserAction} />
    </div>
  );
};

export { CreateUser };
