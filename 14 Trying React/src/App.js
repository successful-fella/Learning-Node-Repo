import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello.jsx'
import { Counter } from './components/Counter.jsx'
import { LoginStatus } from './components/LoginStatus.jsx'
import { Languages } from './components/Languages.jsx'

function App() {
	return (
		<div className="container">
			<LoginStatus />
			<Languages />
			<div className="App">
				<header className="App-header">
					<Hello name="Kawalpreet" />
					<hr />
					<Hello name="Kazuma">Please note this guy sucks!</Hello>
					<hr />
					<Hello name="Subaru" />
					<hr />
					<Counter />
				</header>
			</div>
		</div>
	);
}

export default App;
