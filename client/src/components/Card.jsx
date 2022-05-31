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
						<h3>{mode[0].StopAreaName}</h3>
					</HeaderContainer>

					<Ul>
						{mode.map(function ({ LineNumber, Destination, DisplayTime }, idx) {
							return (
								<Li key={idx}>{`${LineNumber} mot ${
									Destination === 'Södertälje centrum' ? 'Södertälje C' : Destination
								} går ${
									DisplayTime === 'Nu' ? 'nu' : 'om ' + DisplayTime
								}`}</Li>
							)
						})}
					</Ul>
				</>
			)}
		</Container>
	)
}

const Container = styled.div`
	width:100%;
	height:100%;
	max-width: 300px;
	display: flex;
	flex-flow: column;
	color: #fff;
`

const BusIcon = styled(Bus)`
	fill: #fff;
	width: 50px;
	height: auto;
	margin: 0 15px 0 8px;
`
const TrainIcon = styled(Train)`
	fill: #fff;
	width: 50px;
	height: auto;
	margin: 0 15px 0 8px;
`

const HeaderContainer = styled.div`
	display: flex;
`

const Ul = styled.ul`
	margin: 0;
	padding: 50px 0 0 0;
`

const Li = styled.li`
	margin: 5px;
	padding: 5px;
	font-size: 18px;
	font-weight: 500;
	text-decoration: none;
	list-style: none;
	width: 300px; 
`
export default Card
