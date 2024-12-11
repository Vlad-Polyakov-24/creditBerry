import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './MainAdvantages.module.scss';

type MainAdvantagesProps = {
	className?: string;
};

const MainAdvantages = memo((props: MainAdvantagesProps) => {
	const { className } = props;

	return (
		<section className={classNames(styles.advantages, {}, [className])}>
			<p>advantages</p>
		</section>
	);
});

export default MainAdvantages;