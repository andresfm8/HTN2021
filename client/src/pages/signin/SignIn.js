import React from 'react';
import SignInComponent from '../../components/sign-in/SignIn';
import Image from './Illustration.png';
export default function SignIn () {
	return (
		<div className="flex flex-wrap h-screen bg-gradient-to-r from-blue-dark to-blue-light">
			<a className="text-white ml-5 mt-5" href="/">
				Back
			</a>
			<div className="w-full flex h-screen place-items-center bg-gradient-to-r from-blue-dark to-blue-light">
				<div className="ml-6 lg:ml-40">
					<SignInComponent />
				</div>
				<img src={Image} className="hidden md:inline-flex" />
			</div>
		</div>
	);
}
