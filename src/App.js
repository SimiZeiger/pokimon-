
import './App.css';
import Pokeman from './Pokeman';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/pokeman' element={<Pokeman />} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
