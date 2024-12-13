import { memo, useMemo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { navLinks } from '../model/data/nav.data';
import styles from './Nav.module.scss';

type NavProps = {
	className?: string;
};

const Nav = memo((props: NavProps) => {
	const { className } = props;

	return (
		<nav className={classNames(styles.nav, {}, [className])}>
			{
				useMemo(() => navLinks.map(link => (
					<a key={link} href={`#${link}`} className={styles.nav__link}>{link}</a>
				)), [])
			}
		</nav>
	);
});

export default Nav;