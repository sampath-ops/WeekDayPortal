import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPortal from './pages/SearchPortal';
import "./App.css"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
