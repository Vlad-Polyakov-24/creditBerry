import type { HTMLAttributes, ReactNode } from 'react';
import styles from './SliderTooltip.module.scss';

interface SliderTooltipProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}

const SliderTooltip = ({ children, ...rest }: SliderTooltipProps) => (
	<div {...rest}>
		<div className={styles.tooltip}>
			{children}
		</div>
	</div>
);

export default SliderTooltip;