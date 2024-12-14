import { memo, type ReactNode } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Card } from '@shared/ui/Card';
import styles from './AdvantageCard.module.scss';

type AdvantageCardProps = {
	className?: string;
	icon?: ReactNode;
	text: string;
};

const AdvantageCard = memo((props: AdvantageCardProps) => {
	const { className, icon, text } = props;

	return (
		<Card className={classNames(styles.card, {}, [className])}>
			{icon && <span className={styles.card__icon}>{icon}</span>}
			<p className={styles.card__text}>{text}</p>
		</Card>
	);
});

export default AdvantageCard;