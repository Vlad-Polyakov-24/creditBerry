import AdultIcon from '@shared/assets/icons/adult_icon.svg';
import PassportIcon from '@shared/assets/icons/passport_icon.svg';

export const conditions = [
	{
		title: 'Ваш вік!',
		text: 'Кредит надається особам, що досягли повноліття.',
		icon: <AdultIcon />,
	},
	{
		title: 'Український паспорт!',
		text: 'Кредит надаємо лише громадянам України.',
		icon: <PassportIcon />,
	},
];