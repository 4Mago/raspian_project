import React from 'react'
import { useQuery } from 'react-query'
import { getData } from '../utils/getData'
import styled from 'styled-components'

const UpRight = () => {
	const query = useQuery('sl-data', getData, {
		refetchInterval: 30000,
	})
	return (
		<Container>
			{query.isLoading ? (
				<p>Loading...</p>
			) : query.isSuccess ? (
				<>
					<h1>{query.data.ResponseData.Buses[0].StopAreaName}</h1>
					<ul>
						{query.data.ResponseData.Buses.map(function (
							{ LineNumber, Destination, DisplayTime },
							idx
						) {
							return (
								<Li key={idx}>{`linje ${LineNumber} mot ${Destination} går ${
									DisplayTime === 'Nu' ? DisplayTime : 'om ' + DisplayTime
								}`}</Li>
							)
						})}
					</ul>
				</>
			) : (
				<p>Error</p>
			)}
		</Container>
	)
}

export default UpRight

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column;
	color: #fff;
`

const Li = styled.li`
	margin: 5px;
	padding: 5px;
	font-weight: 500;
	text-decoration: none;
	list-style: none;
`
