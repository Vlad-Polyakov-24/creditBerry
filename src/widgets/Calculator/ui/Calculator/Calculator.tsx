import { memo, useState } from 'react';
import { useMedia } from '@shared/hooks/useMedia';
import { classNames } from '@shared/lib/classNames';
import { Card } from '@shared/ui/Card';
import { Button } from '@shared/ui/Button';
import CalculatorInput from '../CalculatorInput/CalculatorInput';
import { AppStatus, useChangeStatus } from '@entities/App';
import { CalculatorInputTheme } from '../../model/types/Calculator.types';
import styles from './Calculator.module.scss';

type CalculatorProps = {
	className?: string;
};

const Calculator = memo(({ className }: CalculatorProps) => {
	const [amount, setAmount] = useState(500);
	const amountFixed = {
		min: 500,
		max: 25000,
	};
	const { change } = useChangeStatus();
	const { isMobile } = useMedia();

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
			</div>
			<div className={styles.calculator__info}>
				<p>Ми зібрали для вас найкращі пропозиції на ринку</p>
			</div>
			<Button
				className={`${isMobile ? 'mt-12': 'mt-24' } m-centred`}
				style={{ maxWidth: isMobile ? '100%' : 280 }}
				onClick={() => change({ to: AppStatus.FORM })}
				fluid={isMobile}
			>
				Обрати кредит
			</Button>
			<p className={styles.calculator__warning}>* Цей віджет не є кредитним калькулятором</p>
		</Card>
	);
});

export default Calculator;