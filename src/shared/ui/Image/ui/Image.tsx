import { memo, useMemo, type CSSProperties } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Image.module.scss';

type ImageProps = {
	className?: string;
	src: string;
	alt?: string;
	width?: string | number;
	maxWidth?: string | number;
	borderRadius?: string | number;
	customStyles?: CSSProperties;
};

const Image = memo((props: ImageProps) => {
	const {
		className,
		src,
		alt = 'image description',
		width = '100%',
		maxWidth = 100,
		borderRadius = 30,
		customStyles,
	} = props;

	const customStyle: CSSProperties = useMemo(
		() => ({
			width,
			maxWidth,
			borderRadius,
			...customStyles,
		}),
		[width, maxWidth, borderRadius, customStyles]
	);

	return (
		<div className={classNames(styles.image, {}, [className])} style={customStyle}>
			<picture>
				<img src={src} alt={alt} />
			</picture>
		</div>
	);
});

export default Image;