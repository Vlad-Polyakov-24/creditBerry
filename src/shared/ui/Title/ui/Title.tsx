import { memo, type CSSProperties, type HTMLAttributes } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Title.module.scss';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
	className?: string;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	title: string;
	style?: CSSProperties;
}

const Title = memo((props: TitleProps) => {
	const { as: Tag = 'h1', className, title, ...rest } = props;

	return (
		<Tag
			className={classNames(styles.title, {}, [className])}
			{...rest}
		>
			{title}
		</Tag>
	);
});

export default Title;