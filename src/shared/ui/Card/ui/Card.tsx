import { CSSProperties, type ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Card.module.scss';

type CardProps = {
	className?: string;
	style?: CSSProperties;
	children: ReactNode;
};

const Card = (props: CardProps) => {
	const { className, children, style } = props;
	const customStyle: CSSProperties = {
		borderRadius: 28,
		padding: 40,
		...style,
	};

	return (
		<div className={classNames(styles.card, {}, [className])} style={customStyle}>
			{children}
		</div>
	);
};

export default Card;