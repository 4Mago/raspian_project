import React from 'react'
import { useQuery } from 'react-query'
import { getData } from '../utils/getData'
import styled from 'styled-components'

const UpRight = () => {
	const query = useQuery('sl-data', getData, {
		refetchInterval: 30000,
	})
	const { Buses } = query.data.ResponseData

	return (
		<Container>
			{query.isLoading && <p>Loading...</p>}
			{query.isSuccess ? (
				<>
					<h1>{Buses[0].StopAreaName}</h1>
					<ul>
						{Buses.map(function (d, idx) {
							return (
								<Li
									key={idx}
								>{`linje ${d.LineNumber} mot ${d.Destination} går om ${d.DisplayTime}`}</Li>
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
