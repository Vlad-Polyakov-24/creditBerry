import { type ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Container.module.scss';

type ContainerProps = {
	className?: string;
	fluid?: boolean;
	children: ReactNode;
};

const Container = ({ className, fluid, children }: ContainerProps) => (
	<div className={classNames(styles.container, { [styles.containerFluid]: fluid }, [className])}>
		{children}
	</div>
);

export default Container;