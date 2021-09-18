import { Switch, Route } from 'react-router-dom';

import './App.css';

import DashboardPage from './pages/dashboard/Dashboard';
import SessionSelectionPage from './pages/session-selection/SessionSelection';
import SignInPage from './pages/landing/Landing';

const App = () => {
	return (
		<Switch>
			{/* SignIn should have logic to determine if user is already loged in and redirect to sessions page */}
			{/* All routes except for / should be accessible for auth users only */}
			<Route exact path="/" component={SignInPage} />
			<Route exact path="/sessions" component={SessionSelectionPage} />
			<Route exact path="/dashboard" component={DashboardPage} />
		</Switch>
	);
};

export default App;
