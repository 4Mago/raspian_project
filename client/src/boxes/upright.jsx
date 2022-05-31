import React from 'react'
import { useQuery } from 'react-query'
import { getData } from '../utils/getData'
import styled from 'styled-components'
import Card from '../components/Card'

const MODES = {
	BUS: 'Buses',
	TRAIN: 'Trains',
}

const UpRight = () => {
	const query = useQuery('sl-data', getData, {
		refetchInterval: 30000,
	})
	const mode = React.useMemo(() => {
		if (query.data?.ResponseData) {
			return Object.entries(query.data.ResponseData)
				.filter(([key]) => Object.values(MODES).includes(key))
				.map(([, value]) => value)
		}
	}, [query.data])

	return (
		<Wrapper>
			{query.isLoading ? (
				<p>Loading...</p>
			) : query.isSuccess ? (
				<Grid>
					{mode.map((mode, idx) => (
						<Card key={idx} mode={mode} />
					))}
				</Grid>
			) : (
				<p>Error</p>
			)}
		</Wrapper>
	)
}

export default UpRight

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
	align-items: center;
	justify-content: center;
`

const Grid = styled.div`
	display: grid;
	grid-gap: 0;
	grid-template-columns: 48% 52%;
	align-items: start;
	height: 90%;
	width: 98%;
	padding-left:2%; 
`
