import React from 'react'

const SearchBox = ({ searchChange }) => {
	return (
		<input className='search' type='search' placeholder='Search by Country' onChange={ searchChange } />
	)
}

export default SearchBox