import React, { useState } from 'react';
import Calculator from './components/Calculator';
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
    <Calculator
      data={data}
      value={value}
      updateState={updateState}
    />
  );
}
