import React from 'react'
import Card from './Card'

const CardList = ({ campgrounds }) => {
	return (
        campgrounds.map((campground, i) => {
			return <Card key={ i } name={ campground.name } price={ campground.price } description={ campground.description } location={ campground.location } />
		})
	)
}

export default CardList