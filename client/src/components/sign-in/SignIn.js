import React from 'react';

export default function SignInComponent () {
	return (
		<div clasName="flex justify-center">
			<h1 className="text-5xl text-white">Placeholder</h1>
			<h4 className="texl-xl text-white">To create a session, please login with spotify</h4>
			<br />
			<div className="">
				<button className="spotify-button px-10 py-5 rounded-full text-white bg-green-spotify">
					Continue with Spotify
				</button>
			</div>
		</div>
	);
}
