import { memo, useEffect, useState } from 'react';
import { classNames } from '@shared/lib/classNames';
import { WrappedIcon, Icon, IconSize } from '@shared/ui/Icon';
import { useChangeStatus, AppStatus } from '@entities/App';
import styles from './FormSuccess.module.scss';
import SuccessIcon from '@shared/assets/icons/check_icon.svg';
import CounterIcon from '@shared/assets/icons/counter_icon.svg';

type FormSuccessProps = {
	className?: string;
	userNumber: string;
};

const FormSuccess = memo((props: FormSuccessProps) => {
	const { className, userNumber } = props;
	const [counter, setCounter] = useState(3);
	const { change } = useChangeStatus();

	useEffect(() => {
		const timer = setInterval(() => {
			setCounter((prev) => prev - 1);
		}, 1000);

		if (counter === 0) {
			clearInterval(timer);
			window.location.href = 'https://1zaim.com/BRC/1/';
			change({ to: AppStatus.DEFAULT });
		}

		return () => clearInterval(timer);
	}, [change, counter]);

	return (
		<div className={classNames(styles.success, {}, [className])}>
			<WrappedIcon icon={<SuccessIcon />} size={IconSize.SIZE_40} style={{ color: 'var(--color-white)' }} />
			<h2 className={styles.success__title}>Дякуємо за заявку!</h2>
			<p className={styles.success__number}>Твій номер {userNumber} підтвержено</p>
			<p className={styles.success__text}>Переглянути найкращі <br/> пропозиції через</p>
			<p className={styles.success__counter}>
				{counter} секунд <Icon icon={<CounterIcon />} size={IconSize.SIZE_16} />
			</p>
		</div>
	);
});

export default FormSuccess;