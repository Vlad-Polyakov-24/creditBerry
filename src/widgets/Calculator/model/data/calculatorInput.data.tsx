import { CalculatorInputTheme } from '../types/Calculator.types';

export const data = {
	[CalculatorInputTheme.MONEY]: {
		total: (value: number | string) => <>Взяти <span>{value}</span> ₴</>,
		desc: 'грн.',
	},
	[CalculatorInputTheme.DAYS]: {
		total: (value: number | string) => <>На <span>{value}</span> днів</>,
		desc: 'день',
	},
};