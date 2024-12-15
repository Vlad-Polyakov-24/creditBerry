import { memo, useMemo } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Title } from '@shared/ui/Title';
import MainGeneralConditionsItem from './MainGeneralConditionsItem';
import { sectionsId } from '@shared/const/sectionsId';
import { conditions } from '../../model/data/MainGeneralConditions.data';
import styles from './MainGeneralConditions.module.scss';

type MainGeneralConditionsProps = {
	className?: string;
};

const MainGeneralConditions = memo(({ className }: MainGeneralConditionsProps) => (
	<section id={sectionsId.CONDITIONS} className={classNames(styles.conditions, {}, [className])}>
		<Container>
			<Title title={'Загальні умови'} as={'h2'} style={{ color: 'var(--color-white)' }} />
			<ul className={styles.conditions__list}>
				{useMemo(() => conditions.map((condition, i) => (
					<MainGeneralConditionsItem key={i} condition={condition} />
				)), [])}
			</ul>
		</Container>
	</section>
));

export default MainGeneralConditions;