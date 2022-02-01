import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navigation from './components/UI/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
