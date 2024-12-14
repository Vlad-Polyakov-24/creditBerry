import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Title } from '@shared/ui/Title';
import { Gallery } from '@widgets/Gallery';
import { sectionsId } from '@shared/const/sectionsId';
import styles from './MainReviews.module.scss';

type MainReviewsProps = {
	className?: string;
};

const MainReviews = memo(({ className }: MainReviewsProps) => {

	return (
		<section id={sectionsId.REVIEWS} className={classNames(styles.reviews, {}, [className])}>
			<Container>
				<Title title={'Відгуки'} as={'h2'} />
				<Gallery />
			</Container>
		</section>
	);
});

export default MainReviews;