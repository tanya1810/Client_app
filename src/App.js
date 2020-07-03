import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';
import 'tachyons';


class App extends React.Component{
  
  onWardChange=()=>{
    onclick()
  }
  onVillageChange=()=>{

  }
  onDepartmentChange=()=>{

  }
  render(){
    return (
      <div className="App">              
        <Nav/>
        <h1 className='tc .b-m'> File Complaint</h1>        
        <Main/>           
      </div>
    );
  }
}

export default App;
