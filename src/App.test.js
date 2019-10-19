import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList'
class App extends Component {

  state={
    list:[
     
      {id:1,name:'gow',age:21},
      {id:2,name:'pri',age:21},
      {id:3,name:'rav',age:21},
      {id:4,name:'pus',age:21}

    ],
    newitem:""
  }
  onclickHandler=(index,e)=>{
  e.preventDefault()
    console.log(index)
    let users=Object.assign([],this.state.list)
    users.splice(index,1)
    this.setState({
      list:users
    })
  }
//   submitHandler=(e)=>{
//     e.preventDefault()
//     console.log(e.target.value)
//     const newitem={
//       id:1+Math.random(),
//       value:e.target.value
//     }
//     console.log(newitem)
//     const list=[...this.state.list]
// list.push(newitem)
//     this.setState({
// list,
// newitem:""
//     })
//   }
  render(){
  return (
    <div className="App">
     <p>react todo list</p>
     <TodoForm />
     {/* <div>
             ToDo Things   
             {this.state.list.map((user,index)=><li key={user.id} onClick={this.onclickHandler.bind(this,index)}>{user.name}:{user.age}</li>)}
            </div> */}
    
    </div>
  );}
}

export default App;
