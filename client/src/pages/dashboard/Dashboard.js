import React from 'react';
import { useState, useEffect } from 'react';
import CustomButton from '../../components/custom-button/CustomButton';
import SearchBox from '../../components/search-box/SearchBox';

import Song from '../../components/song/Song';
import RequestList from '../../components/request-list/RequestList';
import Doggo from '../../assets/happydoggo.jpg';

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

	const songList = [
		{
			photo: Doggo,
			title: "Oxytocin",
			artist: "Billie Eilish",
			album: "Album Name",
			duration: "1:45"
		}, 
		{
			photo: Doggo,
			title: "Oxytocin",
			artist: "Billie Eilish",
			album: "Album Name",
			duration: "1:45"
		}, 
		{
			photo: Doggo,
			title: "Oxytocin",
			artist: "Billie Eilish",
			album: "Album Name",
			duration: "1:45"
		}
	]

	return (
		<div className="container mx-auto">
			{/* <SearchBox placeholder="Search songs..." /> */}
			DASHBOARD PAGE HERE!
			{code}
			<CustomButton />
			{/* <Song isRequest={false}/> */}
			<RequestList songList={songList}/>

		</div>
	);
};

export default DashboardPage;
