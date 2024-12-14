import { memo, type CSSProperties } from 'react';
import { classNames } from '@shared/lib/classNames';
import Icon, { type IconProps } from '../Icon/Icon';
import styles from './WrappedIcon.module.scss';

interface WrappedIconProps extends IconProps {
	className?: string;
	style?: CSSProperties;
}

const WrappedIcon = memo((props: WrappedIconProps) => {
	const { className, style, ...rest } = props;

	return (
		<span className={classNames(styles.wrapper, {}, [className])} style={style}>
			<Icon {...rest} />
		</span>
	);
});

export default WrappedIcon;