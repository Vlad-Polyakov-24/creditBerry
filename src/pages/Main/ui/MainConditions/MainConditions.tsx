import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './MainConditions.module.scss';

type MainConditionsProps = {
	className?: string;
};

const MainConditions = memo((props: MainConditionsProps) => {
	const { className } = props;

	return (
		<section className={classNames(styles.conditions, {}, [className])}>
			<p>conditions</p>
		</section>
	);
});

export default MainConditions;