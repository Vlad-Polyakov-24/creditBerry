import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Header.module.scss';

type HeaderProps = {
	className?: string;
};

const Header = memo((props: HeaderProps) => {
	const { className } = props;

	return (
		<header className={classNames(styles.header, {}, [className])}>
			<p>header</p>
		</header>
	);
});

export default Header;