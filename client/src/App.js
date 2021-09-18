import { Switch, Route } from 'react-router-dom';

import './App.css';

import DashboardPage from './pages/dashboard/dashboard.component';
import SessionSelectionPage from './pages/session-selection/session-selection.component';
import SignInPage from './pages/landing/landing.component';

const code = new URLSearchParams(window.location.search).get('code');

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
