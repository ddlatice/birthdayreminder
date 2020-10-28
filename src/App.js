import React from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import DateList from './components/DateList'
import { DateProvider } from './components/DateContext';

function App() {
  return (
    <DateProvider>
    <div className="App">
    <Header />
    <Form />
    <DateList />
     
    </div>
    </DateProvider>
  );
}

export default App;
