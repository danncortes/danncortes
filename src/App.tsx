import React from 'react';
import Resume from './components/Resume';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/:language" component={Resume}></Route>
          <Route path="/*" component={Resume}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
