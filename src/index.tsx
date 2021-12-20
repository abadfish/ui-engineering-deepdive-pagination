import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import MovieProvider from './context'
import './styles.css'


ReactDOM.render(
	<React.StrictMode>
		<MovieProvider>
			<App />
		</MovieProvider>
	</React.StrictMode>,
	document.getElementById('root')
)