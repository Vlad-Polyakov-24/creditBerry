import { memo, useMemo } from 'react';
import { classNames } from '@shared/lib/classNames';
import type { IMainGeneralConditions } from '../../model/types/MainGeneralConditions.types';
import styles from './MainGeneralConditions.module.scss';

type MainGeneralConditionsItemProps = {
	className?: string;
	condition: IMainGeneralConditions;
};

const MainGeneralConditionsItem = memo((props: MainGeneralConditionsItemProps) => {
	const { className, condition: { title, text } } = props;

	return (
		<li className={classNames(styles.conditions__item, {}, [className])}>
			<h3 className={styles.title}>{title}</h3>
			<ul className={styles.text}>
				{useMemo(() => text.map((t, i) => (
					<li key={i}>{t}</li>
				)), [text])}
			</ul>
		</li>
	);
});

export default MainGeneralConditionsItem;