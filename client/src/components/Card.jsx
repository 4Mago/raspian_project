import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Bus } from '../icons/bus.svg'
import { ReactComponent as Train } from '../icons/train.svg'
const Card = ({ mode }) => {
	return (
		<Container>
			{mode.length && (
				<>
					<HeaderContainer>
						{mode[0].TransportMode === 'BUS' ? <BusIcon /> : <TrainIcon />}
						<h1>{mode[0].StopAreaName}</h1>
					</HeaderContainer>

					<ul>
						{mode.map(function ({ LineNumber, Destination, DisplayTime }, idx) {
							return (
								<Li key={idx}>{`linje ${LineNumber} mot ${Destination} går ${
									DisplayTime === 'Nu' ? 'nu' : 'om ' + DisplayTime
								}`}</Li>
							)
						})}
					</ul>
				</>
			)}
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-flow: column;
	color: #fff;
`

const BusIcon = styled(Bus)`
	fill: #fff;
	width: 50px;
	height: auto;
	margin-right: 15px;
`
const TrainIcon = styled(Train)`
	fill: #fff;
	width: 50px;
	height: auto;
	margin-right: 15px;
`

const HeaderContainer = styled.div`
	display: flex;
`

const Li = styled.li`
	margin: 5px;
	padding: 5px;
	font-weight: 500;
	text-decoration: none;
	list-style: none;
`
export default Card
