import { ITerm, ITermType } from '../types/TermsModal.types';

export const termsContent: ITerm[] = [
	{
		type: ITermType.TITLE,
		content: 'Правила та умови сервісу',
	},
	{
		type: ITermType.PARAGRAPH,
		content: 'Шановний користувач! Надаючи номер телефону та натискаючи кнопку «Далі» Ви погоджуєтесь з наступними умовами:',
	},
	{
		type: ITermType.PARAGRAPH,
		content: 'Власник сайту creditBerry.com не є кредитною організацією та не надає фінансових послуг споживчого кредитування, а лише здійснює інформування про фінансові установи, які надають такі послуги, та збирає відомості щодо номеру телефону користувачів сайту та відомості, що збираються в автоматичному режимі (IP-адреси пристроїв, за допомогою яких відвідується Сайт, тип пристрою, дата і час відвідування Сайту, поновлення та видалення або знищення даних, відомості про дії на Сайті (в т.ч. про рекламу, що переглядається, використання сервісів Сайту), файли «cookies»), в т.ч. з використанням метричних програм (систем) Google Analytics, Google Tag Manager, Hotjar, виключно з метою:',
	},
	{
		type: ITermType.LIST,
		items: [
			'використання в рекламних цілях (надсилання SMS повідомлень з пропозиціями щодо послуг з мікрокредитування);',
			'поліпшення роботи Сайту, підвищення зручності та ефективності роботи з Сайтом;',
			'визначення переваг, відображення рекламних оголошень (поведінкової реклами);',
			'надання таргетованої реклами на основі переглядів/дій на Сайті за допомогою сервісів Facebook, Instagram;',
			'забезпечення технічної можливості функціонування Сайту.',
		],
	},
	{
		type: ITermType.PARAGRAPH,
		content: 'Зібрані відомості не передаються третім особам, крім випадків, коли це передбачено законодавством України. Власник цього сайту приймає всі необхідні заходи для захисту персональної інформації від несанкціонованого та незаконного розголошення, втрати або знищення. Передача персональної інформації без згоди суб\'єкта персональних даних допускається лише у випадках передбачених законом, и тільки (якщо це необхідно) в інтересах національної безпеки й прав людини.',
	},
	{
		type: ITermType.PARAGRAPH,
		content: 'На Сайті можуть бути посилання на інші веб-сайти, власниками яких є треті особи. При переході за цими посиланнями, дія цього застереження на такі сайти не поширюється.',
	},
	{
		type: ITermType.PARAGRAPH,
		content: 'Я підтверджую, що',
		styles: { textAlign: 'center' },
	},
	{
		type: ITermType.LIST,
		items: [
			'моя дієздатність не обмежена і немає обставин, які могли б вплинути на можливість прийняття мною рішень;',
			'надана мною інформація є достовірною та не порушує прав інших осіб щодо обробки персональних даних;',
			'погоджуюся отримувати SMS зі спеціальними пропозиціями і новинами;',
			'розумію, що можу відмовитись від SMS розсилки з пропозиціями і новинами у будь який час шляхом направлення листа з зазначеним бажанням про відмову від SMS розсилки за електронною адресою banandomarketing@gmail.com;',
			'погоджуюся на обробку особистих даних в обсязі та з метою визначеною вище.',
		],
	},
];