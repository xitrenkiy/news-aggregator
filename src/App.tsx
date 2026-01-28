import { ThemeProvider } from './components/theme-provider';

import './App.css';

function App() {
	return (
		<>
			<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
				<h1>Lox</h1>
			</ThemeProvider>
		</>
	);
}

export default App;
