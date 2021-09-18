import CustomButton from "../../components/custom-button/custom-button.component";
import SearchBox from "../../components/search-box/search-box.component";

const DashboardPage = ({ code }) => {
  return (
    <div>
      <SearchBox placeholder="Search songs..." />
      DASHBOARD PAGE HERE!
      {code}
      <CustomButton />
    </div>
  )
}

export default DashboardPage;