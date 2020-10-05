import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello.jsx'
import { Counter } from './components/Counter.jsx'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Hello name="Kawalpreet" />
				<Hello name="Kazuma">Please note this guy sucks!</Hello>
				<Hello name="Subaru" />
				<Counter />
			</header>
		</div>
	);
}

export default App;
