import { memo } from 'react';
import { Container } from '@shared/ui/Container';
import { Title } from '@shared/ui/Title';
import { Gallery } from '@widgets/Gallery';
import { sectionsId } from '@shared/const/sectionsId';
import { reviews } from '../../model/data/MainReview.data';

type MainReviewsProps = {
	className?: string;
};

const MainReviews = memo(({ className }: MainReviewsProps) => (
	<section id={sectionsId.REVIEWS} className={className} style={{ overflow: 'hidden' }}>
		<Container>
			<Title title={'Відгуки'} as={'h2'}/>
			<Gallery reviews={reviews}/>
		</Container>
	</section>
));

export default MainReviews;