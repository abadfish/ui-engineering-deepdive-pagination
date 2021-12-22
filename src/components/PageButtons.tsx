import React, { useContext } from 'react'
import styled from 'styled-components'
import { MovieContext } from '../context'
import { ControlsSection } from './SearchBar'

const PageButtons: React.FC = () => {

	const { page, incrementPage, decrementPage, movieCount, setPageNum } = useContext(MovieContext)

	const choosePage = (i: number) => {
		setPageNum(i)
	}

	// const pageButtons = movieCount > 0 ? 
	const buttonCount = Math.ceil(movieCount / 10) 
	console.log(buttonCount)

	return (
		<ControlsSection>
			<PgButton onClick={ () => choosePage(1) }>first</PgButton>
			<PgButton onClick={ decrementPage }>back</PgButton>
			<PgButton>{ page }</PgButton>
			<PgButton onClick={ incrementPage }>next</PgButton>
			<PgButton onClick={ () => choosePage(buttonCount) }>last</PgButton>
		</ControlsSection>
	)
}

export default PageButtons

const PgButton = styled.button `
	height: 30px;
	width: 70px;
	border: none;
	-webkit-box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,.2); 
	box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,.2);
	border-radius: 3px;
	margin: 0 .5rem;
	&:hover {
		cursor: pointer;
		-webkit-box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 1px 1px rgba(16,22,26,.2), 0 2px 6px rgba(16,22,26,.2); 
		box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 1px 1px rgba(16,22,26,.2), 0 2px 6px rgba(16,22,26,.2); 
	}
`

// const buttons = () => {
// 	const startButton = page
// 	const endButton = page + 9
// 	const buttonArray = []
// 	for (let i = startButton; i <= endButton; i++) {
// 		buttonArray.push(<button key={ i } onClick={ () => choosePage(i) }>{ i }</button>)
// 	}
// 	return (
// 		buttonArray.map((b) => b)
// 	)
// 	// if (buttonCount > 10 && page )
// }
