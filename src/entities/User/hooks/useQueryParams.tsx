import { useEffect, useState } from 'react';

export const useQueryParams = () => {
	const [params, setParams] = useState<{
		cookies: Record<string, string>;
		backend: Record<string, string>;
	}>({
		cookies: { sub3: 'empty' },
		backend: { sub3: 'empty' },
	});

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const cookies: Record<string, string> = {};
		const backend: Record<string, string> = {};

		const utmMapping: Record<string, string> = {
			utm_source: 'sub1',
			utm_campaign: 'sub2',
			utm_medium: 'sub3',
			utm_term: 'sub4',
			utm_content: 'sub5',
			gclid: 'sub7',
			click_time: 'sub8',
		};

		Object.entries(utmMapping).forEach(([utmKey, subKey]) => {
			const value = urlParams.get(utmKey);
			if (value) {
				cookies[subKey] = value;
			}
		});

		urlParams.forEach((value, key) => {
			if (key.startsWith('sub')) {
				cookies[key] = value;
			}
		});

		if (!cookies.sub3) {
			cookies.sub3 = 'empty';
		}

		const rawSource = urlParams.get('utm_source') || urlParams.get('sub1');

		if (rawSource === 'googleadsgdn') {
			backend.sub1 = 'form';
			backend.sub2 = 'crm';
			backend.sub3 = 'lead';
		} else {
			Object.entries(utmMapping).forEach(([utmKey, subKey]) => {
				const value = urlParams.get(utmKey);
				if (value) {
					backend[subKey] = value;
				}
			});

			urlParams.forEach((value, key) => {
				if (key.startsWith('sub')) {
					backend[key] = value;
				}
			});

			if (!backend.sub3) {
				backend.sub3 = 'empty';
			}
		}

		setParams({ cookies, backend });
	}, []);

	return params;
};