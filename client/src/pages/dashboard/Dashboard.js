import React from 'react';
import { useState, useEffect } from 'react';
import CustomButton from '../../components/custom-button/CustomButton';
import SearchBox from '../../components/search-box/SearchBox';
import axios from 'axios';
const DashboardPage = ({ code }) => {
	const [ accessToken, setAccessToken ] = useState('');

	useEffect(() => {
		axios.post('http://localhost:4000/login', { code }).then((res) => res.json).then((res) => console.log(res));
	}, []);
	return (
		<div>
			<SearchBox placeholder="Search songs..." />
			DASHBOARD PAGE HERE!
			{code}
			<CustomButton />
		</div>
	);
};

export default DashboardPage;
