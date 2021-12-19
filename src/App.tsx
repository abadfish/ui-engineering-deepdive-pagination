import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Movies from './views/Movies'
// import Movie from './views/Movies/Movie'


class App extends React.Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route path='/' element={ <Movies /> } />
					{/* <Movie /> */}
				</Routes>
				{/* <input></input>
				<button onClick={() => alert('Hello')}>Say Hello</button> */}
			</Router>
		)
	}
}

export default App
