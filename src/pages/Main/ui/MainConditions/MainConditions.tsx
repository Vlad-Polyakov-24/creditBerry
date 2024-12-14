import { memo } from 'react';
import { useMedia } from '@shared/hooks/useMedia';
import { Container } from '@shared/ui/Container';
import { Image } from '@shared/ui/Image';
import { Button } from '@shared/ui/Button';
import MainConditionsInfo from './MainConditionsInfo';
import { useChangeStatus, AppStatus } from '@entities/App';
import styles from './MainConditions.module.scss';
import Img from '@shared/assets/images/conditions.jpg';

type MainConditionsProps = {
	className?: string;
};

const MainConditions = memo(({ className }: MainConditionsProps) => {
	const { change } = useChangeStatus();
	const { isTablet } = useMedia();

	return (
		<section className={className}>
			<Container className={styles.conditions}>
				{!isTablet && <Image src={Img} maxWidth={'100%'} shadow />}
				<div className={styles.conditions__content}>
					<MainConditionsInfo />
					<Button
						className={styles.conditions__btn}
						onClick={() => change({ to: AppStatus.FORM })}
						fluid
					>
						Взяти кредит
					</Button>
				</div>
			</Container>
		</section>
	);
});

export default MainConditions;