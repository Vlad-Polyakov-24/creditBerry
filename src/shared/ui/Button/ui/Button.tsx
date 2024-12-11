import { type ButtonHTMLAttributes } from 'react';
import { classNames } from '@shared/lib/classNames';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	fluid?: boolean;
}

const Button = (props: ButtonProps) => {
	const { className, children, ...otherProps } = props;

	return (
		<button
			className={classNames(styles.btn, {}, [className])}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;