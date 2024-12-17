import type { ReactNode, CSSProperties } from 'react';
import { classNames, type Mods } from '@shared/lib/classNames';
import { useModal } from '@shared/hooks/useModal';
import { Portal } from '@shared/ui/Portal';
import styles from './Modal.module.scss';

type ModalProps = {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  contentStyle?: CSSProperties;
};

export const MODAL_ANIMATION_DELAY = 300;

const Modal = (props: ModalProps) => {
  const { className, children, isOpen, contentStyle, onClose } = props;
  const { isMounted, isClosing, modalRef, close } = useModal({
    isOpen,
    onClose,
    animationDelay: MODAL_ANIMATION_DELAY,
  });
  const mods: Mods = {
    [styles.open]: isOpen,
    [styles.closing]: isClosing,
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Portal>
      <div  className={classNames(styles.modal, mods, [])}>
        <div className={styles.modal__overlay} onClick={close}>
          <div
            className={classNames(styles.modal__content, {}, [className])}
            style={contentStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <div ref={modalRef} className={styles.modal__contentInner}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;