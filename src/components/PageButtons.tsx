import React from 'react'

const PageButtons = ({ page }: { page:number }) => {
	console.log(page)
	return (
		<div>
			<button>{ page }</button>
		</div>
	)
}

export default PageButtons
