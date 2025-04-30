import { useEffect } from 'react';
import { AppLayout } from '@app/layouts/AppLayout';
import { useChangeStatus, AppStatus } from '@entities/App';
import { useQueryParams } from '@entities/User';
import { useLocalStorage } from '@shared/hooks/useLocalStorage';
import { useCookies } from '@shared/hooks/useCookies';
import { localStorageVars } from '@shared/const/localStorage';

const App = () => {
  const { change } = useChangeStatus();
  const { getStorage } = useLocalStorage();
  const { setCookie } = useCookies();
  const { cookies: cookiesParams } = useQueryParams();

  useEffect(() => {
    if (cookiesParams) {
      Object.entries(cookiesParams).forEach(([key, value]) => {
        if (value) {
          setCookie(key, value);
        }
      });
    }
  }, [cookiesParams, setCookie]);

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
