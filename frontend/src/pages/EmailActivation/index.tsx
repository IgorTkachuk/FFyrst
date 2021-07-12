import React, { useEffect } from 'react';
import * as H from 'history';

import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { RootState } from 'common/types';
import { ActivationActionCreator } from 'store/slices';
import { ActivationStatus } from 'shared/common/enums';

// export interface RouteComponentProps<Params extends { [K in keyof Params]?: string } = {}, C extends StaticContext = StaticContext, S = H.LocationState> {
//   history: H.History;
//   location: H.Location<S>;
//   match: match<Params>;
//   staticContext?: C;
// }

const ACTION_BUTTONS = {
  [ActivationStatus.SUCCESS]: {
    label: 'Login',
    onClick: (history: H.History) => history.push('/login'),
  },
  [ActivationStatus.EXPIRED]: {
    label: 'Send Link again',
    onClick: (history: H.History, destination: string) => history.push(destination),
  },
  [ActivationStatus.NOT_FOUND]: {
    label: 'Sign Up',
    onClick: (history: H.History) => history.push('/sign-up'),
  }
}

const EmailActivation: React.FC = () => {
  const dispatch = useDispatch();
  const activationStatus = useSelector((state: RootState) => state.activation);
  const history = useHistory();
  const { token } = useParams<{token: string}>();

  useEffect(() => {
    dispatch(ActivationActionCreator.activate(token))
    console.log(ACTION_BUTTONS);

  }, [])

  useEffect(() => {
    console.log(activationStatus);
  }, [activationStatus])

  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      Activate Account
      <h2>{JSON.stringify(activationStatus, null, 2)}</h2>
    </div>
  );
};

export default EmailActivation;
