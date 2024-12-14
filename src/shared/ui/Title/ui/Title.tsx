import { memo, type CSSProperties, type HTMLAttributes } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Title.module.scss';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
	className?: string;
	title: string;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	align?: CSSProperties['textAlign'];
	style?: CSSProperties;
}

const Title = memo((props: TitleProps) => {
	const { as: Tag = 'h1', className, title, align = 'center', ...rest } = props;

	return (
		<Tag
			className={classNames(styles.title, {}, [className])}
			style={{ textAlign: align }}
			{...rest}
		>
			{title}
		</Tag>
	);
});

export default Title;