import * as React from 'react';
import useRoute from './routes';
import { useTypedSelector } from './hooks/useTypedSelector';

const App: React.FC = () => {
  const { authState } = useTypedSelector(state => state.user);
  const routes = useRoute(authState);
  return (
    <div className='w-full min-h-screen bg-gray-50'>
      <div className='max-w-page-content mx-auto'>
        {routes}
      </div>
    </div>
  );
};

export default App;
