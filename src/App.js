import React, {Component} from 'react';
import axios from 'axios';
import './App.css';


import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

class App extends Component {
  constructor(props){
    super(props);

      this.state={
      inventory: [
        {name:'eggs', price:'$2'},
        {name:'milk', price:'$3'},
        {name:'nutella', price:'$5'}
      ]
    }
  }


  render () {
    
      
    return (
      <div className="App">

         <Dashboard/>
         <Form/>
         <Header/>
      
      </div>
    );
  }
}

export default App;
