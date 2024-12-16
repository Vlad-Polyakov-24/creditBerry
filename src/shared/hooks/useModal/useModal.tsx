import {
  // type MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

interface UseModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  animationDelay: number;
}

const useModal = ({ isOpen, onClose, animationDelay }: UseModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    if (!onClose || !modalRef.current) return;

    enableBodyScroll(modalRef.current);
    setIsClosing(true);

    timerRef.current = setTimeout(() => {
      setIsMounted(false);
      setIsClosing(false);
      onClose();
    }, animationDelay);
  }, [animationDelay, onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      close();
    }
  }, [isOpen, close]);

  useEffect(() => {
    if (isMounted && modalRef.current) {
      window.addEventListener('keydown', onKeyDown);
      disableBodyScroll(modalRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      window.removeEventListener('keydown', onKeyDown);
      clearAllBodyScrollLocks();
    };
  }, [isMounted, onKeyDown]);

  return {
    isMounted,
    close: useCallback(close, [close]),
    isClosing,
    modalRef,
  };
};

export default useModal;
