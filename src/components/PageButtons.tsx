import React, { useContext } from 'react'
import { MovieContext } from '../context'
import { ControlsSection } from './SearchBar'

const PageButtons: React.FC = () => {

	const { page, incrementPage, decrementPage, movieCount, setPageNum } = useContext(MovieContext)

	const choosePage = (i: number) => {
		// textContent
		// innerText
		// innerHTML
		setPageNum(i)
	}

	// const pageButtons = movieCount > 0 ? 
	const buttonCount = Math.ceil(movieCount / 10) 
	console.log(buttonCount)
	const buttons = () => {
		const startButton = page
		const endButton = page + 9
		const buttonArray = []
		for (let i = startButton; i <= endButton; i++) {
			buttonArray.push(<button key={ i } onClick={ () => choosePage(i) }>{ i }</button>)
		}
		return (
			buttonArray.map((b) => b)
		)
		// if (buttonCount > 10 && page )
	}

	return (
		<ControlsSection>
			<button onClick={ decrementPage }>back</button>
			{ buttons() }
			<button onClick={ incrementPage }>next</button>
		</ControlsSection>
	)
}

export default PageButtons
