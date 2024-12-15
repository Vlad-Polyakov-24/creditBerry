import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Card } from '@shared/ui/Card';
import styles from './GallerySlide.module.scss';
import type { IReview } from '@widgets/Gallery';

type GallerySlideProps = {
	className?: string;
	review: IReview;
};

const GallerySlide = memo((props: GallerySlideProps) => {
	const { className, review: { name, review } } = props;

	return (
		<Card className={classNames(styles.slide, {}, [className])}>
			<div className={styles.slide__head}>
					<span className={styles.slide__avatar}>
						{name ? name.charAt(0) : 'н'}
					</span>
				<h3 className={'fw-700'}>{name ?? 'Наталка Полтавка'}</h3>
			</div>
			<p>{review ?? 'Рекомендую!'}</p>
		</Card>
	);
});

export default GallerySlide;