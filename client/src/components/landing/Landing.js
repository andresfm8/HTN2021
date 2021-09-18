import { useEffect, useState } from "react";

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
      <a>Host a session</a>
      <a>Join a session</a>
    </div>
  )
}

export default SignIn;