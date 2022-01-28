import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Bond from './Pages/Bond/Bond';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bond" element={<Bond />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
