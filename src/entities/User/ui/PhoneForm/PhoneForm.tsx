import { memo, useCallback, type MouseEvent } from 'react';
import { Form, Formik, type FormikHelpers } from 'formik';
import { classNames } from '@shared/lib/classNames';
import { cleanPhoneNumber } from '@shared/lib/cleanPhoneNumber';
import { useToggle } from '@shared/hooks/useToggle';
import { useToast } from '@shared/hooks/useToast';
import { useLocalStorage } from '@shared/hooks/useLocalStorage';
import { useCookies } from '@shared/hooks/useCookies';
import { useQueryParams } from '../../hooks/useQueryParams';
import { Input } from '@shared/ui/Input';
import { Checkbox } from '@shared/ui/Checkbox';
import { Button } from '@shared/ui/Button';
import { TermsModal } from '@features/TermsModal';
import { numberSchema } from '@shared/const/validationSchemas';
import { userApi } from '../../api/userApi';
import { initialValues } from '../../model/data/phoneForm.data';
import { FormStatus } from '@widgets/Form';
import { localStorageVars } from '@shared/const/localStorage';
import type { IPhoneForm } from '../../model/types/PhoneForm.types';
import styles from './PhoneForm.module.scss';

type PhoneFormProps = {
	className?: string;
	setFormStatus: (status: FormStatus) => void;
	setUserNumber: (number: string) => void;
	setIsLoading: (state: boolean) => void;
};

const PhoneForm = memo((props: PhoneFormProps) => {
	const { className, setFormStatus, setUserNumber, setIsLoading } = props;
	const { backend: backendParams } = useQueryParams();
	const { setStorage } = useLocalStorage();
	const { setCookie } = useCookies();
	const { isOpen, open, close } = useToggle();
	const { error } = useToast();

	const buildPayload = useCallback(
		(values: IPhoneForm) => ({
			contact_number: cleanPhoneNumber(values.number),
			...backendParams,
		}),
		[backendParams]
	);

	const handleClick = useCallback((e: MouseEvent) => {
		e.preventDefault();
		open();
	}, [open]);

	const handleSubmit = useCallback(
		async (values: IPhoneForm, { resetForm }: FormikHelpers<IPhoneForm>) => {
			if (values) {
				try {
					setIsLoading(true);
					await userApi.sendNumber(buildPayload(values));
					setFormStatus(FormStatus.SUCCESS);
					setUserNumber(values.number);
					setCookie('phone', cleanPhoneNumber(values.number));
					setStorage(localStorageVars.LOGGED_IN, 'true');
					resetForm();
				} catch (e) {
					console.error('Error in handleSubmit:', e);
					error('Щось пішло не так, спробуй ще раз!');
				} finally {
					setIsLoading(false);
				}
			}
		},
		[buildPayload, error, setCookie, setFormStatus, setIsLoading, setStorage, setUserNumber]
	);

	return (
		<>
			<Formik validationSchema={numberSchema} initialValues={initialValues} onSubmit={handleSubmit}>
				{({ values: { number, terms } }) => (
					<Form className={classNames(styles.form, {}, [className])}>
						<Input
							name={'number'}
							mask={'+38 (\\000) 000-00-00'}
							placeholder={'+38 (000) 000-00-00'}
						/>
						<Checkbox
							name={'terms'}
							label={
								<>
									Я ознайомлений з <span className={styles.form__conditions} onClick={handleClick}>Правилами і умовами сервісу</span> і
									підтвержую згоду на обробку персональних даних
								</>
							}
						/>
						<Button type={'submit'} className={'m-centred'} style={{ maxWidth: 160 }} disabled={!number || !terms}>
							Далі
						</Button>
					</Form>
				)}
			</Formik>
			{isOpen && <TermsModal isOpen={isOpen} onClose={close}/>}
		</>
	);
});

export default PhoneForm;