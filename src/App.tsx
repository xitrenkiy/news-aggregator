import { ThemeProvider } from './components/theme-provider';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './lib/queryClient';

import { useConfig } from './hooks/useConfig';

import './App.css';

function App() {
	const { data, isLoading } = useConfig();

	console.log(data);

	return (
		<>
			<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
				<QueryClientProvider client={queryClient}>
					<h1>123</h1>
				</QueryClientProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
