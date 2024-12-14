import type { Dispatch, SetStateAction } from 'react';
import Slider from 'rc-slider';
import SliderTooltip from '../SliderTooltip/SliderTooltip';
import 'rc-slider/assets/index.css';
import './Slider.scss';

type SliderProps = {
	className?: string;
	min: number;
	max: number;
	step: number;
	value: number;
	setter: Dispatch<SetStateAction<number>>;
};

const CustomSlider = (props: SliderProps) => {
	const { className, min, max, step, value, setter } = props;

	return (
		<Slider
			min={min}
			max={max}
			step={step}
			value={value}
			onChange={(value) => setter(value as number)}
			className={className}
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
			activeHandleRender={(renderElement, { dragging }) => (
				<>
					{
						dragging ? (
							<SliderTooltip {...renderElement.props}>
								{value}
							</SliderTooltip>
						) : null
					}
				</>
			)}
		/>
	);
};

export default CustomSlider;