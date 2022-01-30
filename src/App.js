import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Bond from './Pages/Bond/Bond';
import Stake from './Pages/Stake/Stake'
import Wrap from './Pages/Wrap/Wrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({
      offset: 0
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bond" element={<Bond />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/wrap" element={<Wrap />} />
          {/* <Route path="/*" element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
