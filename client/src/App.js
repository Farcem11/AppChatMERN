import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import PrivateRoute from './components/PrivateRoute'
import Navigator from './components/Navigator'

import './App.css';

class App extends Component
{
	render() 
	{
		return (
			<Router>
				<div className = "App">
					<Navigator/>
					<div className = "App-header">
						<Switch>
							<Route path="/login" component={Login} />
							<PrivateRoute path="/home" component={Home} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
