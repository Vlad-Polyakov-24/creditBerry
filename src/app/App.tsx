import { useEffect } from 'react';
import { AppLayout } from '@app/layouts/AppLayout';
import { useChangeStatus, AppStatus } from '@entities/App';

const App = () => {
  const { change } = useChangeStatus();

  useEffect(() => {
    const handlePopState = () => {
      change({ to: AppStatus.DEFAULT });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [change]);

  return <AppLayout />;
};

export default App;
