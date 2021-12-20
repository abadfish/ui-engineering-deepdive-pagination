import React, { useContext, useState } from 'react'
import { MovieContext } from '../context'

const PageButtons: React.FC = () => {

	const { page, incrementPage, decrementPage, movieCount } = useContext(MovieContext)

	const [pageNumber, setPageNumber] = useState('')
	console.log(movieCount)

	const choosePage = (e:React.MouseEvent<HTMLButtonElement>) => {
		setPageNumber(e.currentTarget.innerText)
	}

	// const pageButtons = movieCount > 0 ? 
	const buttonCount  = Math.ceil(movieCount / 10) 
	console.log(buttonCount)

	return (
		<div>
			<button onClick={ decrementPage }>back</button>
			<button>{ page }</button>
			<button onClick={  choosePage }>3</button>
			<button onClick={ incrementPage }>next</button>
		</div>
	)
}

export default PageButtons
