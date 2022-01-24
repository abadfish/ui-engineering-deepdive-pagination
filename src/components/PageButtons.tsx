import React from 'react'
import styled from 'styled-components'
// import { MovieContext } from '../context'
import { ControlsSection } from './SearchBar'

interface PageButtonProps {
	page: number 
	setPage: (page:number) => void
	pageTotal:number
}

const PageButtons: React.FC<PageButtonProps> = (props) => {
	
	const { page, pageTotal, setPage } = props

	const decrementPage = () => {
		setPage(page - 1)
	}

	const incrementPage = () => {
		setPage(page + 1)
	}

	return (
		<ControlsSection>
			<PgButton onClick={ () => setPage(1) } data-testid='btn-first'>first</PgButton>
			<PgButton onClick={ decrementPage }>back</PgButton>
			<PgButton>{ page }</PgButton>
			<PgButton onClick={ incrementPage } data-testid='btn-next'>next</PgButton>
			<PgButton onClick={ () => setPage(pageTotal) } data-testid='btn-last'>last</PgButton>
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

// const { page, incrementPage, decrementPage, movieCount, setPageNum } = useContext(MovieContext)
// const buttonCount = Math.ceil(movieCount / 10) 
