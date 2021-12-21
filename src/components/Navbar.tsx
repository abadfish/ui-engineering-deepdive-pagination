import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
	return (
		<Nav>
			<NavLink to='/'><h1>Movie App</h1></NavLink>
		</Nav>
	)
}

export default Navbar

const Nav = styled.nav `
	height: 70px;
	width: 100%;
	background-color: #3d3d3d;
	display: flex;
	align-items: center;
	justify-content: center;
	a {
		text-decoration: none;
	}
	h1 {
		color: #fff;
		font-size: 200%;
	}
`