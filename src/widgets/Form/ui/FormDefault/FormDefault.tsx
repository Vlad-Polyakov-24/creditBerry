import { memo } from 'react';
import { Button, ButtonColor, ButtonTheme } from '@shared/ui/Button';
import { useChangeStatus, AppStatus } from '@entities/App';
import { Icon, IconSize } from '@shared/ui/Icon';
import { PhoneForm } from '@entities/User';
import { FormStatus } from '../../model/types/Form.types';
import styles from './FormDefault.module.scss';
import BackArrowIcon from '@shared/assets/icons/back-arrow_icon.svg';

type FormDefaultProps = {
	setFormStatus: (status: FormStatus) => void;
	setUserNumber: (number: string) => void;
	setIsLoading: (state: boolean) => void;
};

const FormDefault = memo((props: FormDefaultProps) => {
	const { setFormStatus, setUserNumber, setIsLoading } = props;
	const { change } = useChangeStatus();

	return (
		<>
			<Button
				className={styles.card__btn}
				theme={ButtonTheme.CLEAR}
				color={ButtonColor.DARK_GRAY}
				onClick={() => change({ to: AppStatus.DEFAULT })}
			>
				<Icon icon={<BackArrowIcon />} size={IconSize.SIZE_18} />
				Назад
			</Button>
			<h2 className={styles.card__title}>Будь ласка, введи свій номер телефону</h2>
			<p className={styles.card__text}>
				Лише для нових клієнтів! Підтвердь номер телефону. Для цього тобі потрібно ввести код, який ти отримаєш у вигляді СМС-повідомлення.
			</p>
			<PhoneForm setFormStatus={setFormStatus} setUserNumber={setUserNumber} setIsLoading={setIsLoading} />
		</>
	);
});

export default FormDefault;