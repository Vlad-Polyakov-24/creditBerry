import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Marquee.module.scss';

type MarqueeProps = {
	className?: string;
};

const Marquee = memo((props: MarqueeProps) => {
	const { className } = props;

	return (
		<div className={classNames(styles.marquee, {}, [className])}>
			<p>marquee</p>
		</div>
	);
});

export default Marquee;