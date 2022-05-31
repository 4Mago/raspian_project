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
	width:640px;
	height:480px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #00009b;
	box-sizing: border-box;
	overflow-y: hidden; /* Hide vertical scrollbar */
	overflow-x: hidden; /* Hide horizontal scrollbar */

`

const UpContainer = styled.div`
	width: 100%;
	height: 75%;
	background-color: #00009b;
`
