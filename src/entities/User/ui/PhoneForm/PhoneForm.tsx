import { memo, useCallback } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Formik, Form, type FormikValues } from 'formik';
import { Input } from '@shared/ui/Input';
import { Button } from '@shared/ui/Button';
import { numberSchema } from '@shared/const/validationSchemas';
import styles from './PhoneForm.module.scss';

type PhoneFormProps = {
	className?: string;
};

const PhoneForm = memo(({ className }: PhoneFormProps) => {

	const handleSubmit = useCallback((values: FormikValues) => {
		console.log(values);
	}, []);

	return (
		<Formik validationSchema={numberSchema} initialValues={{ number: '' }} onSubmit={handleSubmit}>
			<Form className={classNames(styles.form, {}, [className])}>
				<Input
					name={'number'}
					mask={'+38 (\\000) 000-00-00'}
					placeholder={'+38 (000) 000-00-00'}
				/>
				<Button type={'submit'} className={'m-centred'} style={{ maxWidth: 160 }}>
					Далі
				</Button>
			</Form>
		</Formik>
	);
});

export default PhoneForm;