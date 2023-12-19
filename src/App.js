import './App.scss';
import AppRouter from './routes/AppRouter';
import LocationProvider from './context/LocationContext';
function App() {
  return (
    <div className="App">
      <LocationProvider>
        <AppRouter />
      </LocationProvider>
    </div>
  );
}

export default App;
