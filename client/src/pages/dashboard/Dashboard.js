import React from 'react';
import { useState, useEffect } from 'react';
import CustomButton from '../../components/custom-button/CustomButton';
import SearchBox from '../../components/search-box/SearchBox';
import axios from 'axios';

const DashboardPage = ({ code }) => {
	const [ accessToken, setAccessToken ] = useState('');

	let search = window.location.search;
	let params = new URLSearchParams(search);

	let access = params.get('access');
	let refresh = params.get('refresh');

	// console.log(access);
	// console.log(refresh);
	useEffect(() => {
		if (access) localStorage.setItem('access', access);
		if (refresh) localStorage.setItem('refresh', refresh);
	});

	return (
		<div>
			{/* <SearchBox placeholder="Search songs..." /> */}
			DASHBOARD PAGE HERE!
			{code}
			<CustomButton />
		</div>
	);
};

export default DashboardPage;
