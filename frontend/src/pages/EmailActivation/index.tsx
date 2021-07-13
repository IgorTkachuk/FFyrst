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
  const { token } = useParams<{token: string}>();

  const [message, setMessage] = useState('');
  const [label, setLabel] = useState('');
  const [email, setEmail] = useState<string | null>(null);

  const BUTTONS_OPTIONS = {
    [ActivationStatus.SUCCESS]: {
      label: 'Login',
      onClick: () => history.push('/login'),
    },
    [ActivationStatus.EXPIRED]: {
      label: 'Send Link again',
      onClick: () => {
        dispatch(ActivationActionCreator.request(email))
      },
    },
    [ActivationStatus.NOT_FOUND]: {
      label: 'Sign Up',
      onClick: () => history.push('/sign-up'),
    },
    [ActivationStatus.SENT]: {
      label: '',
      onClick: () => ''
    }
  }

  const handler = () => {
    const { status } = activationStatus;
    const { onClick } = BUTTONS_OPTIONS[status];
    onClick()
  }

  useEffect(() => {
    dispatch(ActivationActionCreator.activate(token))
  }, [])

  useEffect(() => {
    const { status, message, email } = activationStatus;
    const { label } = BUTTONS_OPTIONS[status];
    setMessage(message);
    setLabel(label);
    setEmail(email);
  }, [activationStatus])

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <h1>{message}</h1>
      <div className="mx-auto">
      <Button
        size="medium"
        color="blue"
        label={label}
        onClick={handler}
        props={{
          disabled: activationStatus.status === ActivationStatus.SENT
        }}
      />
      </div>
    </div>
  );
};

export { EmailActivation };
