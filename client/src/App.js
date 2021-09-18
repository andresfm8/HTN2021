import { Switch, Route } from 'react-router-dom';

import './App.css';

import DashboardPage from './pages/dashboard/Dashboard';
import SessionSelectionPage from './pages/session-selection/SessionSelection';
import Landing from './pages/landing/Landing';
import SignIn from './pages/signin/SignIn';

const App = () => {
	return (
		<div>			
			<Switch>
				{/* SignIn should have logic to determine if user is already loged in and redirect to sessions page */}
				{/* All routes except for / should be accessible for auth users only */}
				<Route exact path="/" component={Landing} />
				<Route exact path="/signin" component={SignIn} />
				<Route exact path="/sessions" component={SessionSelectionPage} />
				<Route exact path="/dashboard" component={DashboardPage} />
			</Switch>
		</div>
	);
};

export default App;
