import axios from 'axios';
import { API_ENDPOINT } from '@shared/const/endpoints';

type IPayload = {
	contact_number: string;
	[subKey: `sub${number}`]: string | undefined;
};

export const userApi = {
	sendNumber: async (payload: IPayload) => {
		const headers = {
			'Content-Type': 'application/json',
		};
		const body = {
			source: 'creditberry',
			...payload,
		};

		return await axios.post(API_ENDPOINT, body, { headers });
	},
};