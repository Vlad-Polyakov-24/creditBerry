import { memo } from 'react';
import { classNames } from '@shared/lib/classNames';
import type { IMainGeneralConditions } from '../../model/types/MainGeneralConditions.types';
import styles from './MainGeneralConditions.module.scss';

type MainGeneralConditionsItemProps = {
	className?: string;
	condition: IMainGeneralConditions;
};

const MainGeneralConditionsItem = memo((props: MainGeneralConditionsItemProps) => {
	const { className, condition: { title, list, text } } = props;

	return (
		<li className={classNames(styles.conditions__item, {}, [className])}>
			{title && <h3 className={styles.title}>{title}</h3>}
			{list && (
				<ul className={styles.text}>
					{list.map((item, i) => <li key={i}>{item}</li>)}
				</ul>
			)}
			{text && <p className={styles.text}>{text}</p>}
		</li>
	);
});

export default MainGeneralConditionsItem;