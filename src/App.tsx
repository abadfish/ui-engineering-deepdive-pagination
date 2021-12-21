import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Movies from './views/Movies'
import Movie from './views/Movies/Movie'
import Navbar from './components/Navbar'
import './styles.css'


class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<Navbar />
					<Routes>
						<Route path='/' element={ <Movies /> } />
						<Route path='movies/:imdbID' element={ <Movie /> } />
					</Routes>
				</Router>
			</>
		)
	}
}

export default App
