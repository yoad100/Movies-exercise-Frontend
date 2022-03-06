import './App.css';
import MoviesContextProvider from './MoviesContext';
import MoviesDashboard from './components/MoviesDashboard';

function App() {
  return (
    <div className="App">
		<MoviesContextProvider>
1			<MoviesDashboard />
		</MoviesContextProvider>
    </div>
  );
}

export default App;
