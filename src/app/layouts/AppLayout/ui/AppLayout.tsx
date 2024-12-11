import { MainPage } from '@pages/Main';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';

const AppLayout = () => (
	<main className={'main'}>
		<Header />
		<MainPage />
		<Footer />
	</main>
);

export default AppLayout;