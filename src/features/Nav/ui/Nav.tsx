import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Nav.module.scss';

type NavProps = {
	className?: string;
};

const Nav = memo((props: NavProps) => {
	const { className } = props;

	return (
		<nav className={classNames(styles.nav, {}, [className])}>
			<p>nav</p>
		</nav>
	);
});

export default Nav;