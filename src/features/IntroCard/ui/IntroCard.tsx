import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Card } from '@shared/ui/Card';
import styles from './IntroCard.module.scss';
import LogoTitle from '@shared/assets/images/logo-title.svg';

type IntroCardProps = {
	className?: string;
};

const IntroCard = memo((props: IntroCardProps) => {
	const { className } = props;

	return (
		<Card className={classNames(styles.card, {}, [className])}>
			<div className={styles.card__inner}>
				<h1 className={styles.card__title} aria-label={'title'} title={'CreditBerry'}>
					<LogoTitle/>
				</h1>
				<h2 className={styles.card__subtitle}>
					—твій надійний партнeр<br/>
					у фінансових питаннях!
				</h2>
				<p className={styles.card__text}>
					Просто, швидко та вигідно – гроші стають доступними саме тоді, коли це потрібно!
				</p>
			</div>
		</Card>
	);
});

export default IntroCard;