import { memo, useState } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Card } from '@shared/ui/Card';
import { Button } from '@shared/ui/Button';
import CalculatorInput from '../CalculatorInput/CalculatorInput';
import { CalculatorInputTheme } from '../../model/types/Calculator.types';
import styles from './Calculator.module.scss';

type CalculatorProps = {
	className?: string;
};

const Calculator = memo((props: CalculatorProps) => {
	const { className } = props;
	const [amount, setAmount] = useState(500);
	const [days, setDays] = useState(1);
	const [percentage, setPercentage] = useState(0.05);
	const [total, setTotal] = useState(500.05);
	const amountFixed = {
		min: 500,
		max: 25000,
	};
	const daysFixed = {
		min: 1,
    max: 30,
	};

	return (
		<Card className={classNames(styles.calculator, {}, [className])}>
			<div className={styles.calculator__inputs}>
				<CalculatorInput
					setter={setAmount}
					min={amountFixed.min}
					max={amountFixed.max}
					value={500}
					total={amount}
					theme={CalculatorInputTheme.MONEY}
				/>
				<CalculatorInput
					setter={setDays}
					min={daysFixed.min}
					max={daysFixed.max}
					value={1}
					total={days}
					theme={CalculatorInputTheme.DAYS}
				/>
			</div>
			<div className={styles.calculator__info}>
				<p>Відсотки: <span>{percentage}</span> ₴</p>
				<p>Усього потрібно сплатити: <span>{total}</span> ₴</p>
			</div>
			<Button className={'mt-24 m-centred'} style={{ maxWidth: 280 }}>
				Взяти кредит
			</Button>
		</Card>
	);
});

export default Calculator;