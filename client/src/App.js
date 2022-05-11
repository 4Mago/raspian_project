import { QueryClient, QueryClientProvider } from 'react-query'
import UpRight from './boxes/upright'
import './App.css'

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<UpRight />
		</QueryClientProvider>
	)
}

export default App
