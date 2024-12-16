import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { useChangeStatus, AppStatus } from '@entities/App';
import styles from './Logo.module.scss';
import LogoIcon from '@shared/assets/icons/logo.svg';

type LogoProps = {
	className?: string;
};

const Logo = memo(({ className }: LogoProps) => {
	const { change } = useChangeStatus();

	return (
		<strong className={classNames(styles.logo, {}, [className])} onClick={() => change({ to: AppStatus.DEFAULT })}>
			<LogoIcon/>
		</strong>
	);
});

export default Logo;