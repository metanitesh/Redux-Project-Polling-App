import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Route exact match="/" component={Login} />
    </div>
  );
}

export default App;
