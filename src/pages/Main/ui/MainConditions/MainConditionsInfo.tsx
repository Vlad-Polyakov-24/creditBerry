import { memo, useMemo } from 'react';
import { useMedia } from '@shared/hooks/useMedia';
import { classNames } from '@shared/lib/classNames';
import { Card } from '@shared/ui/Card';
import { Title } from '@shared/ui/Title';
import { WrappedIcon, IconSize } from '@shared/ui/Icon';
import { conditions } from '../../model/data/MainConditions.data';
import styles from './MainConditions.module.scss';

type MainConditionsInfoProps = {
	className?: string;
};

const MainConditionsInfo = memo(({ className }: MainConditionsInfoProps) => {
	const { isTablet } = useMedia();

	return (
		<Card className={classNames(styles.info, {}, [className])}>
			<Title title={'Умови отримання кредиту'} as={'h2'} align={isTablet ? 'left' : 'center'} />
			<ul className={styles.info__list}>
				{
					useMemo(() => conditions.map(({ title, text, icon }, i) => (
						<li key={i} className={styles.info__item}>
							<WrappedIcon icon={icon} size={IconSize.SIZE_40} style={{ color: 'var(--color-white)' }} />
							<div className={styles.info__itemContent}>
								<h3 className={'fw-700'}>{title}</h3>
								<p>{text}</p>
							</div>
						</li>
					)), [])
				}
			</ul>
		</Card>
	);
});

export default MainConditionsInfo;