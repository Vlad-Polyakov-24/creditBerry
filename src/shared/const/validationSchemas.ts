import * as Yup from 'yup';

export const numberSchema = Yup.object().shape({
	number: Yup.string()
		.required('Введіть номер телефону')
		.matches(/^\+38\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, 'Невірний формат номера'),
});