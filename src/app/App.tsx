import { useEffect } from 'react';
import { AppLayout } from '@app/layouts/AppLayout';
import { useChangeStatus, AppStatus } from '@entities/App';

const App = () => {
  const { change } = useChangeStatus();

  useEffect(() => {
    const handleVisibilityChange = () => {

      console.log('handleVisibilityChange');
      console.log('document.visibilityState', document.visibilityState);
      console.log('window.location.pathname', window.location.pathname);

      if (document.visibilityState === 'visible' && window.location.pathname === '/') {
        change({ to: AppStatus.DEFAULT });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [change]);

  return <AppLayout />;
};

export default App;
