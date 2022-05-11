import React from 'react'
import { useQuery } from 'react-query'
import { getData } from '../utils/getData'
const UpRight = () => {
	const query = useQuery('sl-data', getData)
	console.log(query)
	return (
		<>
			<p>Wake up it's time for school</p>
		</>
	)
}

export default UpRight
