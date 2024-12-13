import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Logo } from '@shared/ui/Logo';
import styles from './Footer.module.scss';

type FooterProps = {
	className?: string;
};

const Footer = memo(({ className }: FooterProps) => (
	<footer className={classNames(styles.footer, {}, [className])}>
		<Container className={styles.footer__inner}>
			<Logo/>
			<address className={styles.footer__copyright}>
				&copy;2024 Наша адреса: ТОВ «CreditBerry», 01005, м. Київ, вул. Анни Ахматової, 18.<br/>
				Залишилися питання? Напишіть нам: <a href={'mailto:info@creditberry.com.ua'}>info@creditberry.com.ua</a>
			</address>
		</Container>
	</footer>
));

export default Footer;