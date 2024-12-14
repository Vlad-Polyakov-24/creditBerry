import { memo, useMemo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { navLinks } from '../model/data/nav.data';
import styles from './Nav.module.scss';

type NavProps = {
	className?: string;
};

const Nav = memo(({ className }: NavProps) => (
	<nav className={classNames(styles.nav, {}, [className])}>
		{
			useMemo(() => navLinks.map(({ link, label }) => (
				<a key={link} href={`#${link}`} className={styles.nav__link}>{label}</a>
			)), [])
		}
	</nav>
));

export default Nav;