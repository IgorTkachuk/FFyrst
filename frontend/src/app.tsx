import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Login from 'components/pageLogin/login';

const App: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Login />
    </>
  );
};

export default App;
