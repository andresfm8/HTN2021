import React from 'react';
import SignInComponent from '../../components/sign-in/SignIn';
export default function SignIn () {
	return (
		<div className="flex flex-wrap h-screen bg-blue-light">
			<a className="text-white ml-5 mt-5" href="/">
				Back
			</a>
			<div className="w-full flex h-screen place-items-center bg-blue-light">
				<div className="ml-6 lg:ml-40">
					<SignInComponent />
				</div>
			</div>
		</div>
	);
}
