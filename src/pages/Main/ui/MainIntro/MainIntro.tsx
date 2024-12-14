import { memo } from 'react';
import { Container } from '@shared/ui/Container';
import { IntroCard } from '@features/IntroCard';
import { Calculator } from '@widgets/Calculator';
import styles from './MainIntro.module.scss';

type MainIntroProps = {
	className?: string;
};

const MainIntro = memo(({ className }: MainIntroProps) => (
	<section className={className}>
		<Container className={styles.intro}>
			<IntroCard />
			<Calculator />
		</Container>
	</section>
));

export default MainIntro;