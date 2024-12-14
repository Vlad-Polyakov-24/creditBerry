import { classNames } from '@shared/lib/classNames';
import { Button } from '@shared/ui/Button';
import styles from './ErrorPage.module.scss';

interface ErrorPageProps {
	className?: string;
}

const ErrorPage = ({ className }: ErrorPageProps) => {

	const reloadPage = () => {
		location.reload();
	};

	return (
		<section className={classNames(styles.errorPage, {}, [className])}>
			<h2>An unexpected error occurred!</h2>
			<Button onClick={reloadPage}>Reload page</Button>
		</section>
	);
};

export { ErrorPage };
