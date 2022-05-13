import { QueryClient, QueryClientProvider } from 'react-query'
import UpRight from './boxes/upright'
import styled from 'styled-components'
import './App.css'

const queryClient = new QueryClient()

function App() {
	return (
		<>
			<Body>
				<UpContainer>
					<QueryClientProvider client={queryClient}>
						<UpRight />
					</QueryClientProvider>
				</UpContainer>
			</Body>
		</>
	)
}

export default App

const Body = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: darkblue;
`

const UpContainer = styled.div`
	width: 60%;
	height: 100%;
	background-color: #00009b;
`
