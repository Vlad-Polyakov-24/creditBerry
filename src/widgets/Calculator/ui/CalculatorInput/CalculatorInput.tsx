import { memo, type Dispatch, type SetStateAction } from 'react';
import Slider from 'rc-slider';
import { classNames } from '@shared/lib/classNames/classNames';
import { Button, ButtonTheme, ButtonColor } from '@shared/ui/Button';
import { Icon, IconSize } from '@shared/ui/Icon';
import { data } from '../../model/data/calculatorInput.data';
import { CalculatorInputTheme } from '../../model/types/Calculator.types';
import styles from './CalculatorInput.module.scss';
import MinusIcon from '@shared/assets/icons/minus_icon.svg';
import PlusIcon from '@shared/assets/icons/plus_icon.svg';

import 'rc-slider/assets/index.css';

type CalculatorInputProps = {
	className?: string;
	min: number;
	max: number;
	value: number;
	total: number;
	theme: CalculatorInputTheme;
	setter: Dispatch<SetStateAction<number>>;
};

const CalculatorInput = memo((props: CalculatorInputProps) => {
	const { className, min, max, value, total, theme, setter } = props;

	const decrement = (setter: Dispatch<SetStateAction<number>>, value: number, min: number) => {
		setter((prev) => Math.max(prev - value, min));
	};

	const increment = (setter: Dispatch<SetStateAction<number>>, value: number, max: number) => {
		setter((prev) => Math.min(prev + value, max));
	};

	return (
		<div className={classNames(styles.input, {}, [className])}>
			<div className={styles.input__control}>
				<Button
					theme={ButtonTheme.CLEAR}
					color={ButtonColor.BLACK}
					onClick={() => decrement(setter, value, min)}
				>
					<Icon icon={<MinusIcon/>} size={IconSize.SIZE_32}/>
				</Button>
				<p className={styles.input__total}>{data[theme].total(total)}</p>
				<Button
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
					onChange={(value) => setter(value as number)}
					styles={{
						rail: {
							height: 2,
							backgroundColor: 'transparent',
						},
						track: {
							height: 2,
							backgroundColor: 'var(--color-tomato-400)',
						},
						handle: {
							width: 20,
							height: 20,
							marginTop: -9,
							opacity: 1,
							border: '4px solid var(--color-tomato-400)',
						},
					}}
				/>
			</div>
			<div className={styles.input__info}>
				<p>{min} {data[theme].desc}</p>
				<p>{max} {data[theme].desc}</p>
			</div>
		</div>
	);
});

export default CalculatorInput;