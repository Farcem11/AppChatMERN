import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import Login from './components/Login';

import './App.css';

class App extends Component 
{
	render() 
	{
		return (
			<Router>
				<div className = "App">
					<div className = "App-header">
						<Login/>
					</div>				
				</div>
			</Router>
		);
	}
}

export default App;
