import React from 'react'

export const EachLanguage = ({language}) => language.map((language, index) => <li key={index}>I like { language }.</li>)