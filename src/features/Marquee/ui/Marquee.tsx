import { memo } from 'react';
import Marquee from 'react-fast-marquee';
import { classNames } from '@shared/lib/classNames';
import styles from './Marquee.module.scss';

type MarqueeProps = {
	className?: string;
	text?: string;
};

const CustomMarquee = memo((props: MarqueeProps) => {
	const { className, text = 'Кредит - швидко та легко!' } = props;

	return (
		<Marquee className={classNames(styles.marquee, {}, [className])} autoFill>
			<p className={styles.marquee__item}>{text}</p>
		</Marquee>
	);
});

export default CustomMarquee;