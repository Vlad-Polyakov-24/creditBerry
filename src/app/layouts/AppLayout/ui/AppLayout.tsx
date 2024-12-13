import { MainPage } from '@pages/Main';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';
import { appState } from '@entities/App';

const AppLayout = () => {
	const { headerHeight } = appState();

	return (
		<main className={'main'}>
			<Header/>
			<div className={'page'} style={{ paddingTop: headerHeight }}>
				<MainPage/>
			</div>
			<Footer/>
		</main>
	);
};

export default AppLayout;