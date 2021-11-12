import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './App.css';

export default function App() {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const updateState = (newData) => {
    setData(newData);
  };

  let value = '';
  if (data.total) {
    value = `${data.total} ${data.operation || ''} ${data.next || ''}`;
  } else if (data.next) {
    value = `${data.next} ${data.operation || ''}`;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/calculator">
        <Calculator
          data={data}
          value={value}
          updateState={updateState}
        />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>
    </BrowserRouter>
  );
}
