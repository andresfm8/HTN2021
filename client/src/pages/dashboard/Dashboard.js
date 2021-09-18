import { useEffect } from 'react';
import CustomButton from '../../components/custom-button/CustomButton';
import SpotifyWebApi from 'spotify-web-api-node';
import client_id from '../../config';
import SearchBox from '../../components/search-box/SearchBox';


const DashboardPage = ({ code }) => {
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
