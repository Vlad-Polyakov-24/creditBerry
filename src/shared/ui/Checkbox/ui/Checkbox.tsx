import { memo, type InputHTMLAttributes, type ReactNode } from 'react';
import { Field } from 'formik';
import { classNames } from '@shared/lib/classNames';
import styles from './Checkbox.module.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	name: string;
	label?: string | ReactNode;
}

const Checkbox = memo((props: CheckboxProps) => {
	const { className, name, label, ...rest } = props;

	return (
	<label className={classNames(styles.checkbox, {}, [className])}>
		<Field className={styles.checkbox__input} type={'checkbox'} name={name} {...rest} />
		<div className={styles.checkbox__fake}>
			<span className={styles.checkbox__box}/>
			{label && <span className={styles.checkbox__label}>{label}</span>}
		</div>
	</label>
	);
});

export default Checkbox;