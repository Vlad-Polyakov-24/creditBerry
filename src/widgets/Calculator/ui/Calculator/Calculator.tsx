import { memo, useEffect, useState } from 'react';
import { useMedia } from '@shared/hooks/useMedia';
import { classNames } from '@shared/lib/classNames';
import { Card } from '@shared/ui/Card';
import { Button } from '@shared/ui/Button';
import CalculatorInput from '../CalculatorInput/CalculatorInput';
import { AppStatus, useChangeStatus } from '@entities/App';
import { CalculatorInputTheme } from '../../model/types/Calculator.types';
import styles from './Calculator.module.scss';
import { useLocalStorage } from '@entities/User';
import { localStorageVars } from '@shared/const/localStorage';

type CalculatorProps = {
	className?: string;
};

const BASE_RATE = 0.05;

const Calculator = memo(({ className }: CalculatorProps) => {
	const [amount, setAmount] = useState(500);
	const [days, setDays] = useState(1);
	const [percentage, setPercentage] = useState(0);
	const [total, setTotal] = useState(0);
	const amountFixed = {
		min: 500,
		max: 25000,
	};
	const daysFixed = {
		min: 1,
    max: 30,
	};
	const { change } = useChangeStatus();
	const { isMobile } = useMedia();

	const { removeStorage } = useLocalStorage();

	useEffect(() => {
		const amountFactor = amount / 500;
		const newPercentage = BASE_RATE * amountFactor * days;

		setPercentage(parseFloat(newPercentage.toFixed(2)));
		setTotal(parseFloat((amount + newPercentage).toFixed(2)));
	}, [amount, days]);

	return (
		<Card className={classNames(styles.calculator, {}, [className])} style={{ overflow: 'visible' }}>
			<div className={styles.calculator__inputs}>
				<CalculatorInput
					setter={setAmount}
					min={amountFixed.min}
					max={amountFixed.max}
					value={amountFixed.min}
					total={amount}
					theme={CalculatorInputTheme.MONEY}
				/>
				<CalculatorInput
					setter={setDays}
					min={daysFixed.min}
					max={daysFixed.max}
					value={daysFixed.min}
					total={days}
					theme={CalculatorInputTheme.DAYS}
				/>
			</div>
			<div className={styles.calculator__info}>
				<p>Відсотки: <span>{percentage}</span> ₴</p>
				<p>Усього потрібно сплатити: <span>{total}</span> ₴</p>
			</div>
			<Button
				className={`${isMobile ? 'mt-12': 'mt-24' } m-centred`}
				style={{ maxWidth: isMobile ? '100%' : 280 }}
				onClick={() => change({ to: AppStatus.FORM })}
				fluid={isMobile}
			>
				Взяти кредит
			</Button>
			<Button className={'m-centred mt-10'} onClick={() => removeStorage(localStorageVars.LOGGED_IN)}>
				reset status
			</Button>
			<p className={styles.calculator__warning}>* Цей віджет не є кредитним калькулятором</p>
		</Card>
	);
});

export default Calculator;