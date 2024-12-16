import { memo, useMemo, useState } from 'react';
import { classNames } from '@shared/lib/classNames';
import { Card } from '@shared/ui/Card';
import { Container } from '@shared/ui/Container';
import { FormLoader } from '@features/FormLoader';
import FormDefault from '../FormDefault/FormDefault';
import FormSuccess from '../FormSuccess/FormSuccess';
import { FormStatus } from '../../model/types/Form.types';
import styles from './Form.module.scss';

type FormProps = {
	className?: string;
};

const Form = memo(({ className }: FormProps) => {
	const [status, setStatus] = useState<FormStatus>(FormStatus.DEFAULT);
	const [userNumber, setUserNumber] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const contentMap = useMemo(() => ({
		[FormStatus.DEFAULT]: <FormDefault
			setFormStatus={setStatus}
			setUserNumber={setUserNumber}
			setIsLoading={setIsLoading}
		/>,
    [FormStatus.SUCCESS]: <FormSuccess userNumber={userNumber} />,
	}), [userNumber]);

	return (
		<section className={classNames(styles.section, {}, [className])}>
			<Container>
				<Card className={styles.card}>
					{contentMap[status]}
					{isLoading && <FormLoader />}
				</Card>
			</Container>
		</section>
	);
});

export default Form;