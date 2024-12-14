import type { CSSProperties, ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Card.module.scss';

type CardProps = {
	className?: string;
	style?: CSSProperties;
	children: ReactNode;
};

const Card = ({ className, children, style }: CardProps) => (
	<div className={classNames(styles.card, {}, [className])} style={style}>{children}</div>
);

export default Card;