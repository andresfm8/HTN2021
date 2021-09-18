import { useState } from "react";

import useFetch from "../../util/useFetch";

const SearchBox = ({ placeholder }) => {

  const [query, setQuery] = useState(null);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const { data, error, isLoading } = useFetch('ENDPOINTHERE', 'GET', query);

  if (isLoading) {
    //Spinner if we have time
  }

  if (error) {
    //Show error msg, maybe create error component
  }


  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
      {data ? data : "no data"}
    </div>
  )
}

export default SearchBox;