import CustomButton from '../../components/custom-button/CustomButton';
import SearchBox from '../../components/search-box/SearchBox';
import Song from '../../components/song/Song';

const DashboardPage = ({ code }) => {
	return (
		<div>
			<SearchBox placeholder="Search songs..." />
			DASHBOARD PAGE HERE!
			{code}
			<CustomButton />
			<Song isRequest={true}/>
			<Song isRequest={false}/>
		</div>
	);
};

export default DashboardPage;
