import { memo, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Grid } from 'swiper/modules';
import { classNames } from '@shared/lib/classNames';
import GallerySlide from '../GallerySlide/GallerySlide';
import type { IReview } from '../../model/types/Gallery.types';
import 'swiper/scss';
import 'swiper/scss/grid';
import 'swiper/scss/pagination';
import styles from './Gallery.module.scss';

type GalleryProps = {
	className?: string;
	reviews: IReview[];
};

const Gallery = memo(({ className, reviews }: GalleryProps) => (
	<Swiper
		modules={[Pagination, Autoplay, Grid]}
		className={classNames(styles.gallery, {}, [className])}
		spaceBetween={12}
		slidesPerView={1}
		slidesPerGroup={1}
		pagination={{ clickable: true }}
		grid={{
			rows: 2,
			fill: 'row',
		}}
		autoplay={{
			delay: 4000,
			disableOnInteraction: false,
		}}
		breakpoints={{
			768: {
				spaceBetween: 20,
				slidesPerView: 2,
			},
			1024: {
				spaceBetween: 30,
				slidesPerView: 3,
				slidesPerGroup: 3,
				grid: {
					rows: 1,
				},
				loop: true,
			},
		}}
	>
		{useMemo(() => reviews.map((review) => (
			<SwiperSlide key={review.name} style={{ height: 'auto' }}>
				<GallerySlide review={review}/>
			</SwiperSlide>
		)), [reviews])}
	</Swiper>
));

export default Gallery;