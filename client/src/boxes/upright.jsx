import React from 'react'
import { useQuery } from 'react-query'
import { getData } from '../utils/getData'
import styled from 'styled-components'

const UpRight = () => {
	const query = useQuery('sl-data', getData)
	let displayTime = ''
	let lineNumber = ''
	let destination = ''
	console.log(query)

	if (query.isSuccess == false) {
		console.log('something went wrong')
	}

	else {

			let stopAreaName = JSON.stringify(query.data.ResponseData.Buses[0].StopAreaName)
			// let displayTime = JSON.stringify(query.data.ResponseData.Buses[x].DisplayTime)
			// let lineNumber = JSON.stringify(query.data.ResponseData.Buses[x].LineNumber)
			// let destination = JSON.stringify(query.data.ResponseData.Buses[x].Destination)

		

	return (
	<Container>
			<>
			<P>{stopAreaName}</P>
			<ul>
			{query.data.ResponseData.Buses.map(function(d, idx){
				return (<>
				<Li key={idx}>{`linje ${d.LineNumber} mot ${d.Destination} går om ${d.DisplayTime}`}</Li>
				</>
			)})}
			</ul>
			</>
	</Container>	
		)}
		console.log(displayTime)
		console.log(query)
	}



export default UpRight

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column;
`

const Li = styled.li`
	margin: 5px;
	padding: 5px;
	color: white;
	font-weight: 500;
	text-decoration: none;
	list-style: none;
	`

const P = styled.h1`
	text-decoration: none;
`