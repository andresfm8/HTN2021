import CustomButton from '../../components/custom-button/CustomButton';
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
