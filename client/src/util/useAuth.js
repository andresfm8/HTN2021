import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useAuth (code) {
	const [ accessToken, setAccessToken ] = useState();

	useEffect(
		() => {
			axios
				.post('http://localhost:4000/login', { code })
				.then((response) => {
					window.history.pushState({}, null, '/');
					console.log(response.data);
					setAccessToken(response.data.accessToken);
				})
				.catch((err) => {
					console.log(err);
					// window.location = '/';
				});
		},
		[ code ]
	);
	return accessToken;
}
