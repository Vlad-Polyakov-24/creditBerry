import { useEffect } from 'react';
import { AppLayout } from '@app/layouts/AppLayout';
import { AppStatus, useChangeStatus } from '@entities/App';
import { useLocalStorage } from '@entities/User';
import { localStorageVars } from '@shared/const/localStorage.ts';

const App = () => {
  const { change } = useChangeStatus();
  const { getStorage } = useLocalStorage();

  useEffect(() => {
    const handleVisibilityChange = () => {
      const isVisited = getStorage(localStorageVars.LOGGED_IN);

      console.log('handleVisibilityChange');
      console.log('document.visibilityState', document.visibilityState);
      console.log('window.location.pathname', window.location.pathname);

      if (document.visibilityState === 'visible' && isVisited) {
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
