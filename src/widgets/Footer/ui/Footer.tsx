import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Footer.module.scss';

type FooterProps = {
	className?: string;
};

const Footer = memo((props: FooterProps) => {
	const { className } = props;

	return (
		<footer className={classNames(styles.footer, {}, [className])}>
			<p>footer</p>
		</footer>
	);
});

export default Footer;