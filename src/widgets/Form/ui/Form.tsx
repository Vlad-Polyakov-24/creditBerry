import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Card } from '@shared/ui/Card';
import { Button, ButtonColor, ButtonTheme } from '@shared/ui/Button';
import { Icon, IconSize } from '@shared/ui/Icon';
import { Container } from '@shared/ui/Container';
import { useChangeStatus, AppStatus } from '@entities/App';
import styles from './Form.module.scss';
import BackArrowIcon from '@shared/assets/icons/back-arrow_icon.svg';

import { BugButton } from '@app/providers/ErrorBoundary';
import { localStorageVars } from '@shared/const/localStorage';
import { useToast } from '@shared/hooks/useToast';

type FormProps = {
	className?: string;
};

const Form = memo((props: FormProps) => {
	const { className } = props;
	const { change } = useChangeStatus();
	const { success, error, info } = useToast();

	return (
		<section className={classNames(styles.form, {}, [className])}>
			<Container>
				<Card className={styles.card}>
					<Button
						theme={ButtonTheme.CLEAR}
						color={ButtonColor.DARK_GRAY}
						onClick={() => change({ to: AppStatus.DEFAULT })}
					>
						<Icon icon={<BackArrowIcon />} size={IconSize.SIZE_18} />
						Назад
					</Button>
					<h2 className={styles.card__title}>
						Будь ласка, введи свій номер телефону
					</h2>
					<p className={styles.card__text}>
						Лише для нових клієнтів! Підтвердь номер телефону. Для цього тобі потрібно ввести код, який ти отримаєш у вигляді СМС-повідомлення.
					</p>
					<Button onClick={() => localStorage.setItem(localStorageVars.LOGGED_IN, 'true')}>
						set storage
					</Button>
					<Button onClick={() => localStorage.removeItem(localStorageVars.LOGGED_IN)}>
						clear storage
					</Button>
					<Button onClick={() => success('sukase')}>
						sukase
					</Button>
					<Button onClick={() => error('erores')}>
						erores
					</Button>
					<Button onClick={() => info('infose')}>
						infose
					</Button>
					<BugButton />
				</Card>
			</Container>
		</section>
	);
});

export default Form;