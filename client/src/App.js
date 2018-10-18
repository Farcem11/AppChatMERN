import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import PrivateRoute from './components/PrivateRoute'
import SignUp from './components/SignUp'
import Navigator from './components/Navigator'

import './App.sass';

class App extends Component
{
	render() 
	{
		return (
			<Router>
				<div className="App">
					<div className="container">
						<Navigator/>
						<Switch>
							<Route path="/login" component={Login} />
							<Route path="/signup" component={SignUp} />
							<PrivateRoute exact path="/" component={Home} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
