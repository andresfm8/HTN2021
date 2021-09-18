import { useEffect, useState } from "react";
import { loginUrl } from "./spotify";

const SignIn = () => {
  // http://localhost:4000/login GET
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const requestAuth = async () => {
    setIsLoading(true);
    try {
      // const resp = await fetch(url, options);
      // const data = await resp.json();
      setData(data);
    } catch (e) {
      setData([]);
      setError(e);
    }
    setIsLoading(false);
  }

  if (isLoading) {
    //Show loader eventually
  }

  if (error) {
    //Err component, not priority, can just render a div for now
  }

  return (
    <div>
      {data ? data : "nope"}

      <div>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify-Logo"/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    </div>
  )
}

export default SignIn;