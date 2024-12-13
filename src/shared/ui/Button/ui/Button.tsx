import { type ButtonHTMLAttributes } from 'react';
import { classNames, type Additional, type Mods } from '@shared/lib/classNames';
import { ButtonTheme, ButtonColor } from '../model/types/Button.types';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	fluid?: boolean;
	theme?: ButtonTheme;
	color?: ButtonColor;
}

const Button = (props: ButtonProps) => {
	const {
		className,
		children,
		type = 'button',
		fluid = false,
		theme = ButtonTheme.PRIMARY,
		color = ButtonColor.WHITE,
		...otherProps
	} = props;
	const mods: Mods = {
		[styles.btnFluid]: fluid,
	};
	const additional: Additional = [className, styles[theme], styles[color]];

	return (
		<button className={classNames(styles.btn, mods, additional)} type={type} {...otherProps}>
			{children}
		</button>
	);
};

export default Button;