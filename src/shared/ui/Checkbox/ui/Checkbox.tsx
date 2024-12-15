import { memo } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import styles from './Checkbox.module.scss';

type CheckboxProps = {
	className?: string;
};

const Checkbox = memo((props: CheckboxProps) => {
	const { className } = props;

	return (
		<div className={classNames('', {}, [className])}>

		</div>
	);
});

export default Checkbox;