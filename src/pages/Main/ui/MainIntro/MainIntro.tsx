import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './MainIntro.module.scss';

type MainIntroProps = {
	className?: string;
};

const MainIntro = memo((props: MainIntroProps) => {
	const { className } = props;

	return (
		<section className={classNames(styles.intro, {}, [className])}>
			<p>intro</p>
		</section>
	);
});

export default MainIntro;