import { memo } from 'react';
import { useField } from 'formik';
import { IMaskInput } from 'react-imask';
import { classNames } from '@shared/lib/classNames';
import styles from './Input.module.scss';

type InputProps = {
	className?: string;
	name: string;
	mask: string;
	placeholder?: string;
};

const Input = memo(({ className, name, mask, placeholder }: InputProps) => {
	const [field, meta, helpers] = useField(name);

	return (
		<label className={styles.input__label}>
			<IMaskInput
				{...field}
				mask={mask}
				onAccept={(value: string) => helpers.setValue(value)}
				placeholder={placeholder}
				className={classNames(styles.input, { [styles.error]: meta.touched && meta.error}, [className])}
			/>
			{meta.touched && meta.error && (
				<div className={styles.input__error}>{meta.error}</div>
			)}
		</label>
	);
});

export default Input;