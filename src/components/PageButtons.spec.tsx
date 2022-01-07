// __tests__/fetch.test.js
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import PageButtons from './PageButtons'
import { MovieContext } from '../context'
import { contextProps } from './testContextProps'

describe('PageButtons', () => {
	describe('First page button', () => {
		it('sets the page to 1 when the user clicks the first button', async () => {
			render(
				<MovieContext.Provider value={ contextProps }>
					<PageButtons />
				</MovieContext.Provider>
			)
	
			// ACT
			fireEvent.click(screen.getByTestId('btn-first'))
	
			// ASSERT:
			expect(contextProps.setPageNum).toHaveBeenCalledTimes(1)
			expect(contextProps.setPageNum).toHaveBeenCalledWith(1)
		})
	})
	describe('Last page button', () => {
		it('sets the page to 10 when the user clicks the last button', async () => {
			render(
				<MovieContext.Provider value={ contextProps }>
					<PageButtons />
				</MovieContext.Provider>
			)
	
			fireEvent.click(screen.getByTestId('btn-last'))
	
			expect(contextProps.setPageNum).toHaveBeenCalledTimes(2)
			expect(contextProps.setPageNum).toHaveBeenCalledWith(contextProps.movieCount / 10)
		})
	})
})
