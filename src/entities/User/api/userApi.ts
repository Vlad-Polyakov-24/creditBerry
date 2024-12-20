import axios from 'axios';

export const userApi = {
	sendNumber: async (number: string) => {
		const endpoint = 'http://zaim.cc/api/postback/lead_form/';
		const headers = {
			'Content-Type': 'application/json',
		};
		const body = {
			source: 'creditberry',
			sub3: 'string',
			contact_number: number,
		};

		return await axios.post(endpoint, body, { headers });
	},
};