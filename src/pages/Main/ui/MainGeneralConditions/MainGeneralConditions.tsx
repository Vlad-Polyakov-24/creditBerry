import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './MainGeneralConditions.module.scss';

type MainGeneralConditionsProps = {
	className?: string;
};

const MainGeneralConditions = memo((props: MainGeneralConditionsProps) => {
	const { className } = props;

	return (
		<section className={classNames(styles.conditions, {}, [className])}>
			<p>conditions</p>
		</section>
	);
});

export default MainGeneralConditions;