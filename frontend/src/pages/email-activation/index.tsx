import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { RootState } from 'common/types';
import { ActivationActionCreator } from 'store/slices';
import { ActivationStatus } from 'shared/common/enums';
import { Button } from 'stories/controls/button/Button';

const EmailActivation: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const activationStatus = useSelector((state: RootState) => state.activation);
  const { token } = useParams<{ token: string }>();

  const [message, setMessage] = useState('');
  const [label, setLabel] = useState('');
  const [email, setEmail] = useState<string | null>(null);

  const BUTTONS_OPTIONS = {
    [ActivationStatus.SUCCESS]: {
      label: 'Login',
      onClick: () => history.push('/auth'),
    },
    [ActivationStatus.EXPIRED]: {
      label: 'Send Link again',
      onClick: () => {
        dispatch(ActivationActionCreator.request(email));
      },
    },
    [ActivationStatus.NOT_FOUND]: {
      label: 'Sign Up',
      onClick: () => history.push('/sign-up'),
    },
    [ActivationStatus.SENT]: {
      label: '',
      onClick: () => '',
    },
  };

  const handler = () => {
    const { status } = activationStatus;
    const { onClick } = BUTTONS_OPTIONS[status];
    onClick();
  };

  useEffect(() => {
    dispatch(ActivationActionCreator.activate(token));
  }, []);

  useEffect(() => {
    const { status, message, email } = activationStatus;
    const { label } = BUTTONS_OPTIONS[status];
    setMessage(message);
    setLabel(label);
    setEmail(email);
  }, [activationStatus]);

  return (
    <div className='container mx-auto flex flex-col justify-center items-center p-20'>
      <div className='bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col justify-center'>
        <h1 className='text-5xl text-gray-700 mb-10'>{message}</h1>
        <div className='mx-auto'>
          {
            activationStatus.status !== ActivationStatus.SENT ?
              <Button
                like={'primary'}
                label={label}
                onClick={handler}
              />
              : null
          }

        </div>
      </div>
    </div>
  );
};

export { EmailActivation };
