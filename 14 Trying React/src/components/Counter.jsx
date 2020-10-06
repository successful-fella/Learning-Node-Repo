import React from 'react'

export const Counter = () => {
	let [count, increment] = React.useState(0)

	return (
		<div>
			<h1>This is a counter</h1>
			<p>You clicked { count } times</p>
			<button onClick={() => increment(++count)}>Count++</button>
		</div>
	)
}