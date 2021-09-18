import { useEffect, useState } from "react";

import axios from 'axios';

const useFetch = (url, method, query) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    let options = {
      method: method,
      url: url,
      params: {term: query}
    };
      const fetchData = async () => {
        console.log(options);
        setIsLoading(true);
        try {
          const res = await axios.request(options);
          const data = await res.json();
          setData(data);
        } catch (e){
          setError(e);
        }

        setIsLoading(false);
      }
      fetchData();
  }, [query]);
  return { data, error, isLoading };
} 

export default useFetch;