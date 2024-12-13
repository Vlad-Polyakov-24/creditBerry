import { classNames } from '@shared/lib/classNames';
import { Marquee } from '@features/Marquee';
import MainIntro from '../MainIntro/MainIntro';
import MainAdvantages from '../MainAdvantages/MainAdvantages';
import MainConditions from '../MainConditions/MainConditions';
import MainReviews from '../MainReviews/MainReviews';
import MainGeneralConditions from '../MainGeneralConditions/MainGeneralConditions';
import styles from './Main.module.scss';

type MainProps = {
	className?: string;
};

const Main = (props: MainProps) => {
	const { className } = props;

	return (
		<article className={classNames(styles.main, {}, [className])}>
			<Marquee />
			<div className={styles.main__inner}>
				<MainIntro />
				<MainAdvantages />
				<MainConditions />
				<MainReviews />
				<MainGeneralConditions />
			</div>
		</article>
	);
};

export default Main;