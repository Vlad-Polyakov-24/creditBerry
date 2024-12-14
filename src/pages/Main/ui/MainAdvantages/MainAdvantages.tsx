import { memo, useMemo } from 'react';
import { Container } from '@shared/ui/Container';
import { Title } from '@shared/ui/Title';
import { AdvantageCard } from '@features/AdvantageCard';
import { WrappedIcon, IconSize } from '@shared/ui/Icon';
import { sectionsId } from '@shared/const/sectionsId';
import { advantages } from '../../model/data/MainAdvantages.data';
import styles from './MainAdvantages.module.scss';

type MainAdvantagesProps = {
	className?: string;
};

const MainAdvantages = memo(({ className }: MainAdvantagesProps) => (
	<section id={sectionsId.ADVANTAGES} className={className}>
		<Container>
			<Title title={'Наші переваги'} as={'h2'}/>
			<ul className={styles.advantages__list}>
				{
					useMemo(() => advantages.map(({ text, icon }, i) => (
						<li key={i} className={styles.advantages__item}>
							<AdvantageCard
								text={text}
								icon={<WrappedIcon icon={icon} size={IconSize.SIZE_40} style={{ color: 'var(--color-white)' }}/>}
							/>
						</li>
					)), [])
				}
			</ul>
		</Container>
	</section>
));

export default MainAdvantages;