import type { IMainGeneralConditions } from '../types/MainGeneralConditions.types';

export const conditions: IMainGeneralConditions[] = [
	{
		title: 'Строк погашення та процентні ставки',
		text: [
			'– мінімальний термін погашення боргу (minimum period for repayment) - 90 днів;',
			'– максимальний термін (maximum period for repayment) - 365 днів;',
			'– максимальна річна відсоткова ставка, що включає відсоток, а також всі інші комісії та витрати за рік (maximum Annual Percentage Rate (APR), including interest rate plus fees and other costs for year) становить 182,5%;',
			'- комісія за користування кредитом - відсутня;',
			'– річний процент за користування кредитом - min 36,5%, max 182,5%.',
		],
	},
	{
		title: 'Приклад розрахунку та вартості кредитів (реpresentative example of the total cost of the loan, including all applicable fees) в умовах пільгового періоду',
		text: [
			'Сума – 1000 грн.',
			'Термін – 90 днів.',
			'Процентна ставка - 0,01% на день.',
			'Плата за користування коштами становитиме 0,01% на день – 0,1 грн.',
			'Сума до повернення – 9 грн (тобто 0,1 грн * 90 днів) та тіло кредиту.',
			'Загальна сума до повернення через 90 днів – 1009 грн.',
			'APR = 36,5%.',
		],
	},
];