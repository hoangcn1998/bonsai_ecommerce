import React, { useState } from "react";
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Customer from './components/Customer/Customer';
import Admin from './components/Admin/Admin';

function App() {

  return (
    <div className="App">
      <Admin></Admin>
     <Customer></Customer>
    </div>
  );
}

export default App;
