import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { IntroCard } from '@features/IntroCard';
import { Calculator } from '@widgets/Calculator';
import styles from './MainIntro.module.scss';

type MainIntroProps = {
	className?: string;
};

const MainIntro = memo((props: MainIntroProps) => {
	const { className } = props;

	return (
		<section className={classNames(styles.intro, {}, [className])}>
			<Container className={styles.intro__inner}>
				<IntroCard />
				<Calculator />
			</Container>
		</section>
	);
});

export default MainIntro;