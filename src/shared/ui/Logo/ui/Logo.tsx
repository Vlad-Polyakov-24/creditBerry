import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Logo.module.scss';
import LogoIcon from '@shared/assets/icons/logo.svg';

type LogoProps = {
	className?: string;
};

const Logo = memo((props: LogoProps) => {
	const { className } = props;

	return (
		<strong className={classNames(styles.logo, {}, [className])}>
			<a href={'/'} className={styles.logo__link}>
				<LogoIcon />
			</a>
		</strong>
	);
});

export default Logo;