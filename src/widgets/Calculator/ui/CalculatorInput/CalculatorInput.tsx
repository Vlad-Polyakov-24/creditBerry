import { useCallback, type Dispatch, type SetStateAction } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Button, ButtonTheme, ButtonColor } from '@shared/ui/Button';
import { Icon, IconSize } from '@shared/ui/Icon';
import { Slider } from '@features/Slider';
import { data } from '../../model/data/calculatorInput.data';
import { CalculatorInputTheme } from '../../model/types/Calculator.types';
import styles from './CalculatorInput.module.scss';
import MinusIcon from '@shared/assets/icons/minus_icon.svg';
import PlusIcon from '@shared/assets/icons/plus_icon.svg';

type CalculatorInputProps = {
	className?: string;
	min: number;
	max: number;
	value: number;
	total: number;
	theme: CalculatorInputTheme;
	setter: Dispatch<SetStateAction<number>>;
};

const CalculatorInput = (props: CalculatorInputProps) => {
	const { className, min, max, value, total, theme, setter } = props;

	const decrement = useCallback((setter: Dispatch<SetStateAction<number>>, value: number, min: number) => {
		setter((prev) => Math.max(prev - value, min));
	}, []);

	const increment = useCallback((setter: Dispatch<SetStateAction<number>>, value: number, max: number) => {
		setter((prev) => Math.min(prev + value, max));
	}, []);

	return (
		<div className={classNames(styles.input, {}, [className])}>
			<div className={styles.input__control}>
				<Button
					className={styles.input__button}
					theme={ButtonTheme.CLEAR}
					color={ButtonColor.BLACK}
					onClick={() => decrement(setter, value, min)}
				>
					<Icon icon={<MinusIcon/>} size={IconSize.SIZE_32}/>
				</Button>
				<p className={styles.input__total}>{data[theme].total(total)}</p>
				<Button
					className={styles.input__button}
					theme={ButtonTheme.CLEAR}
					color={ButtonColor.BLACK}
					onClick={() => increment(setter, value, max)}
				>
					<Icon icon={<PlusIcon/>} size={IconSize.SIZE_32}/>
				</Button>
				<Slider
					min={min}
					max={max}
					step={value}
					value={total}
					setter={setter}
				/>
			</div>
			<div className={styles.input__info}>
				<p>{min} {data[theme].desc}</p>
				<p>{max} {data[theme].desc}</p>
			</div>
		</div>
	);
};

export default CalculatorInput;