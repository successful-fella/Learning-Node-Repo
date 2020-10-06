import React from 'react'

export const LoginStatus = () => {
	let [isLoggedIn, setLogin] = React.useState(false)

	const login = () => setLogin(true)
	const logout = () => setLogin(false)

	return isLoggedIn ? (
		<div>
			<span className="text-white">You're logged in</span>&nbsp;
			<button onClick={ logout }>Logout?</button>
		</div>
	) : (
		<button onClick={ login }>Login</button>
	)
}