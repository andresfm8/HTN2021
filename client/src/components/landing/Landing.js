import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Landing = () => {
	// http://localhost:4000/login GET
	const [ data, setData ] = useState(null);
	const [ error, setError ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);

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
	};

	if (isLoading) {
		//Show loader eventually
	}

	if (error) {
		//Err component, not priority, can just render a div for now
	}

	return (
		<div className="flex justify-between w-2/6 pl-0">
		   <Link to="/sessions">
    	   <button type="button" className="border-white hover:bg-blue-button text-white font-bold py-2 px-4 rounded-full w-44 border-2">
          		JOIN A SESSION
   		    </button>
 			</Link>
			<Link to="/signin">
    	    <button type="button" className="border-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-44 border-2">
          		CREATE SESSION
   		   </button>
 			</Link>		
		</div>
	);
};

export default Landing;
