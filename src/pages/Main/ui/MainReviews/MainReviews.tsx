import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './MainReviews.module.scss';

type MainReviewsProps = {
	className?: string;
};

const MainReviews = memo((props: MainReviewsProps) => {
	const { className } = props;

	return (
		<section className={classNames(styles.reviews, {}, [className])}>
			<p>reviews</p>
		</section>
	);
});

export default MainReviews;