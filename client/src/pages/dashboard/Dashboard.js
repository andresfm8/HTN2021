import { useEffect } from 'react';
import CustomButton from '../../components/custom-button/CustomButton';
import SpotifyWebApi from 'spotify-web-api-node';
import client_id from '../../config';


const DashboardPage = ({ code }) => {
	return (
		<div>
			DASHBOARD PAGE HERE!
			{code}
			<CustomButton />
		</div>
	);
};

export default DashboardPage;
