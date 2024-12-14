import { memo } from 'react';
import { useMedia } from '@shared/hooks/useMedia';
import { Button, ButtonColor, ButtonTheme } from '@shared/ui/Button';
import { Icon, IconSize } from '@shared/ui/Icon';
import { useChangeStatus, AppStatus } from '@entities/App';
import LoginIcon from '@shared/assets/icons/login_icon.svg';

type LoginButtonProps = {
	className?: string;
};

const LoginButton = memo(({ className }: LoginButtonProps) => {
	const { isMobile } = useMedia();
	const { change } = useChangeStatus();

	return (
		<Button
			theme={ButtonTheme.LOGIN}
			color={ButtonColor.WHITE}
			className={className}
			onClick={() => change({ to: AppStatus.FORM })}
		>
			Увійти
			<Icon icon={<LoginIcon />} size={isMobile ? IconSize.SIZE_24 : IconSize.SIZE_32} />
		</Button>
	);
});

export default LoginButton;