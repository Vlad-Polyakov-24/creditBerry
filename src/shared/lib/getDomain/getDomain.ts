export const getDomain = () => {
	const hostname = window.location.hostname;

	if (hostname === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
		return undefined;
	}

	const parts = hostname.split('.');
	return parts.length > 2 ? `.${parts.slice(-2).join('.')}` : hostname;
};