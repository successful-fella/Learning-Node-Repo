// List of languages I like... iterated.

import React from 'react'
import { EachLanguage } from './EachLanguage.jsx'

export const Languages = () => {
	const languages = [ "PHP", "JavaScript", "HTML", "CSS", "English", "Hindi", "Japanese" ]

	return (
		<div>
			<h1>Languages I like -</h1>
			<ul>
				<EachLanguage language={ languages } />
			</ul>
		</div>
	)
}