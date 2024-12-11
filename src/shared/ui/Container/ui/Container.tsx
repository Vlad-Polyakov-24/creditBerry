import { type ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Container.module.scss';

type ContainerProps = {
	className?: string;
	children: ReactNode;
};

const Container = ({ className, children }: ContainerProps) => (
	<div className={classNames(styles.container, {}, [className])}>
		{children}
	</div>
);

export default Container;