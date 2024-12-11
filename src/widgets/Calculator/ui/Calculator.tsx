import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Calculator.module.scss';

type CalculatorProps = {
	className?: string;
};

const Calculator = memo((props: CalculatorProps) => {
	const { className } = props;

	return (
		<div className={classNames(styles.calculator, {}, [className])}>
			<p>calc</p>
		</div>
	);
});

export default Calculator;