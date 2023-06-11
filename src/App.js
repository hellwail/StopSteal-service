import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import AuthorizationForm from './components/authorizationForm/AuthorizationForm';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import ReportForm from './components/reportForm/ReportForm';


function App() {
  return (
    <div className="App">
      <Header />  
      <Main />   
      
    </div>
  );
}

export default App;
