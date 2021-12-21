import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import MovieProvider from './context'


ReactDOM.render(
	<React.StrictMode>
		<MovieProvider>
			<App />
		</MovieProvider>
	</React.StrictMode>,
	document.getElementById('root')
)