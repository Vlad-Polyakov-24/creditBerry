import { memo, useMemo, type CSSProperties } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Image.module.scss';

type ImageProps = {
	className?: string;
	src: string;
	alt?: string;
	shadow?: boolean;
	maxWidth?: CSSProperties['maxWidth'];
	customStyles?: CSSProperties;
};

const Image = memo((props: ImageProps) => {
	const {
		className,
		src,
		alt = 'image description',
		shadow,
		maxWidth = 100,
		customStyles,
	} = props;

	const customStyle: CSSProperties = useMemo(
		() => ({
			maxWidth,
			...customStyles,
		}),
		[maxWidth, customStyles]
	);

	return (
		<div className={classNames(styles.image, {[styles.shadow]: shadow}, [className])} style={customStyle}>
			<picture>
				<img src={src} alt={alt} />
			</picture>
		</div>
	);
});

export default Image;