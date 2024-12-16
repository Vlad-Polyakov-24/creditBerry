import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Loader } from '@shared/ui/Loader';
import styles from './FormLoader.module.scss';

type FormLoaderProps = {
	className?: string;
};

const FormLoader = memo(({ className }: FormLoaderProps) => (
	<div className={classNames(styles.formLoader, {}, [className])}>
		<Loader />
	</div>
));

export default FormLoader;