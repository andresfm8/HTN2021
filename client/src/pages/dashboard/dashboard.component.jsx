import { useEffect } from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import useAuth from "../../util/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import client_id from "../../config";

const spotifyApi = new SpotifyWebApi({
    clientId: client_id
})

const DashboardPage = ({ code }) => {
  const accessToken = useAuth(code);

  useEffect(() => {
    if(!accessToken) return;

    spotifyApi.setAccessToken(accessToken);

    spotifyApi.getMe().then(data => {
      console.log(data);
    })
  }, [accessToken])
  return (
    <div>
      DASHBOARD PAGE HERE!
      { code }
      <CustomButton />
    </div>
  )
}

export default DashboardPage;