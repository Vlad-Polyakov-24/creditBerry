import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Gallery.module.scss';

type GalleryProps = {
	className?: string;
};

const Gallery = memo((props: GalleryProps) => {
	const { className } = props;

	return (
		<div className={styles.wrapper}>
			<Swiper
				className={classNames('', {}, [className])}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
			</Swiper>
		</div>
	);
});

export default Gallery;