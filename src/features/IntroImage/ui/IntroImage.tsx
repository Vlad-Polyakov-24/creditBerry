import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './IntroImage.module.scss';

type IntroImageProps = {
	className?: string;
};

const IntroImage = memo((props: IntroImageProps) => {
	const { className } = props;

	return (
		<div className={classNames(styles.img, {}, [className])}>

		</div>
	);
});

export default IntroImage;