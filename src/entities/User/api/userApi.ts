// import axios from 'axios';

export const userApi = {
	sendNumber: async (number: string) => {
		// const endpoint = 'https://url';
		// const headers = {
		// 	'Content-Type': 'application/json',
		// };
		//
		// return await axios.post(endpoint, { number }, { headers });

		return new Promise((resolve) => {
			setTimeout(() => {
				console.log(`Mocked API call with number: ${number}`);
				resolve(true);
			}, 2000);
		});
	},
};