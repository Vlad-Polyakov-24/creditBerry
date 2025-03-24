import { useEffect, useState } from 'react';

export const useQueryParams = () => {
	const [subParams, setSubParams] = useState<Record<string, string>>({
		sub3: 'empty',
	});

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const subs: Record<string, string> = {};
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
			const utmValue = params.get(utmKey);
			if (utmValue) {
				subs[subKey] = utmValue;
			}
		});

		params.forEach((value, key) => {
			if (key.startsWith('sub')) {
				subs[key] = value;
			}
		});

		if (!subs.sub3) {
			subs.sub3 = 'empty';
		}

		setSubParams(subs);
	}, []);

	return subParams;
};