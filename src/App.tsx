import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { ThemeProvider } from './components/theme-provider';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
				<Router>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/article/:id' element={<ArticlePage />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
