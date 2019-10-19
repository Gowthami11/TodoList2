import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm'

class App extends Component {

 
  render(){
  return (
    <div className="App">
     <p><strong>React Todo App</strong></p>
     <TodoForm />
    
    
    </div>
  );}
}

export default App;
