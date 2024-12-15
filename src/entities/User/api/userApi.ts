import axios from 'axios';

export const userApi = {
	sendNumber: async (number: string | number) => {
		const endpoint = 'https://url';
		const headers = {
			'Content-Type': 'application/json',
		};

		return await axios.post(endpoint, { number }, { headers });
	},
};