import { type ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Card.module.scss';

type CardProps = {
	className?: string;
	children: ReactNode;
};

const Card = (props: CardProps) => {
	const { className, children } = props;

	return (
		<div className={classNames(styles.card, {}, [className])}>
			{children}
		</div>
	);
};

export default Card;