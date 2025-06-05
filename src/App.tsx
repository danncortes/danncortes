import React from 'react';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Routes>
          <Route path="/:language" element={<Resume />} />
          <Route path="/*" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
