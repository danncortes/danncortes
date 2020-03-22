import React from 'react';
import Resume from './components/Resume/Resume';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Resume className="p-6 bg-gray-200 h-100" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
