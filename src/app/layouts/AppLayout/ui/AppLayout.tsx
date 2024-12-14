import { useMedia } from '@shared/hooks/useMedia';
import { Header } from '@widgets/Header';
import { Marquee } from '@features/Marquee';
import { MainPage } from '@pages/Main';
import { Form } from '@widgets/Form';
import { Footer } from '@widgets/Footer';
import { appState, AppStatus } from '@entities/App';

const AppLayout = () => {
	const { isMobile } = useMedia();
	const { headerHeight, status } = appState();

	return (
		<main className={'main'}>
			<Header />
			<div className={'page'} style={{ paddingTop: headerHeight }}>
				<Marquee className={`mt-${isMobile ? '20' : '32'}`} />
				{status === AppStatus.DEFAULT && <MainPage />}
				{status === AppStatus.FORM && <Form />}
			</div>
			<Footer />
		</main>
	);
};

export default AppLayout;