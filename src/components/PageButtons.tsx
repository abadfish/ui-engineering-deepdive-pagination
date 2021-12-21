import React, { useContext, useState } from 'react'
import { MovieContext } from '../context'

const PageButtons: React.FC = () => {

	const { page, incrementPage, decrementPage, movieCount } = useContext(MovieContext)

	const [pageNumber, setPageNumber] = useState('')
	console.log(movieCount, pageNumber)

	const choosePage = (e:React.MouseEvent<HTMLButtonElement>) => {
		// TEXT_NODE
		// textContent
		// innerText
		// innerHTML
		setPageNumber(e.currentTarget.innerText)
	}

	// const pageButtons = movieCount > 0 ? 
	const buttonCount = Math.ceil(movieCount / 10) 
	console.log(buttonCount)
	const buttons = () => {
		const startButton = 1
		const endButton = 10
		const buttonArray = []
		for (let i = startButton; i <= endButton; i++) {
			buttonArray.push(<button key={ i } onClick={ choosePage }>{ i }</button>)
		}
		return (
			buttonArray.map((b) => b)
		)
		// if (buttonCount > 10 && page )
	}

	return (
		<div>
			<button onClick={ decrementPage }>back</button>
			{ buttons() }
			<button onClick={ incrementPage }>next</button>
		</div>
	)
}

export default PageButtons
