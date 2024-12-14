import { useCallback, useMemo } from 'react';
import { toast, type ToastOptions } from 'react-toastify';
import styles from './useToast.module.scss';

export const useToast = () => {
  const baseOptions = useMemo(
    () =>
      ({
        position: 'top-right',
        autoClose: 3000,
        className: `${styles.toast}`,
      } as ToastOptions),
    []
  );

  const error = useCallback((message: string) => {
    toast.error(message, { ...baseOptions });
  }, [baseOptions]);

  const success = useCallback((message: string) => {
    toast.success(message, { ...baseOptions });
  }, [baseOptions]);

  const info = useCallback((message: string) => {
    toast.info(message, { ...baseOptions });
  }, [baseOptions]);

  return { error, success,info };
};