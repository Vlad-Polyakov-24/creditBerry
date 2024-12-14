import { memo, useEffect, useRef } from 'react';
import { classNames } from '@shared/lib/classNames';
import { useMedia } from '@shared/hooks/useMedia';
import { Container } from '@shared/ui/Container';
import { Logo } from '@shared/ui/Logo';
import { Nav } from '@features/Nav';
import { LoginButton } from '@features/LoginButton';
import { appState, AppStatus } from '@entities/App';
import styles from './Header.module.scss';

type HeaderProps = {
	className?: string;
};

const Header = memo(({ className }: HeaderProps) => {
	const headerRef = useRef<HTMLHeadElement>(null);
	const { isMobile } = useMedia();
	const { status, set } = appState();

	useEffect(() => {
		if (headerRef.current) {
			const updateHeaderHeight = () => {
				set({ headerHeight: headerRef.current?.getBoundingClientRect().height || 0 });
			};

			const resizeObserver = new ResizeObserver(() => {
				updateHeaderHeight();
			});

			resizeObserver.observe(headerRef.current);

			return () => {
				resizeObserver.disconnect();
			};
		}
	}, [headerRef, set]);

	return (
		<header ref={headerRef} className={classNames(styles.header, {}, [className])}>
			<Container style={{ height: '100%' }}>
				<div className={styles.header__inner}>
					<Logo className={status === AppStatus.FORM ? 'm-centred' : ''} />
					{status === AppStatus.DEFAULT && (
						<div className={styles.header__nav}>
							{!isMobile && <Nav />}
							<LoginButton />
						</div>
					)}
				</div>
			</Container>
		</header>
	);
});

export default Header;