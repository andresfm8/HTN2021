const SessionSelectionPage = () => {
	return (
		<div className="flex flex-wrap h-screen bg-gradient-to-r from-blue-dark to-blue-light">
			<a className="text-white ml-5 mt-5" href="/">
				Back
			</a>
			<div className="w-full flex h-screen place-items-center bg-gradient-to-r from-blue-dark to-blue-light">
				<div className="ml-6 lg:ml-40">
					<div clasName="flex justify-center place-items-center">
						<h1 className="text-5xl text-white">Join a Session</h1>
						<h4 className="texl-xl text-white">To join a session, enter the session code below</h4>
						<br />
						<div className="">
							<input type="text" className="text-white rounded-lg mb-10 py-2 bg-blue-light focus:outline-white" />
							<br />
							<button className="spotify-button px-6 py-3 rounded-full text-white bg-green-spotify">
								Join the Session
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SessionSelectionPage;
