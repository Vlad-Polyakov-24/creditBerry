import axios from 'axios';
import { API_ENDPOINT } from '@shared/const/endpoints';

export const userApi = {
	sendNumber: async (number: string) => {
		const headers = {
			'Content-Type': 'application/json',
		};
		const body = {
			source: 'creditberry',
			sub3: 'string',
			contact_number: number,
		};

		return await axios.post(API_ENDPOINT, body, { headers });
	},
};