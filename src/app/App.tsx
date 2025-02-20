import { useEffect } from 'react';
import { AppLayout } from '@app/layouts/AppLayout';
import { useChangeStatus, AppStatus } from '@entities/App';
import { useLocalStorage } from '@shared/hooks/useLocalStorage';
import { localStorageVars } from '@shared/const/localStorage';

const App = () => {
  const { change } = useChangeStatus();
  const { getStorage } = useLocalStorage();

  useEffect(() => {
    const handleVisibilityChange = () => {
      const isVisited = getStorage(localStorageVars.LOGGED_IN);

      if (document.visibilityState === 'visible' && isVisited) {
        change({ to: AppStatus.DEFAULT });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [change, getStorage]);

  return <AppLayout />;
};

export default App;
