import React, { Component } from 'react'
import axios from 'axios'
import todo from './TodoForm.css';
 class TodoForm extends Component {
     state={
         list:[
             
         ],
         loading:true
     }
     componentDidMount(){
         this.todo.focus();
         axios.get('https://todolist-82f9d.firebaseio.com/todo1.json').then(response=>{

            console.log(response.data)
            this.setState({
                list:Object.assign([],response.data),
                loading:false
               
            })
            console.log(this.state.list)
         })
     }
     onSub=(e)=>{
         
         e.preventDefault()
         if(this.todo.value===""){
             return ;
         }
         else if(this.todo.value!=="")
         {
             var newitem={
                 value:this.todo.value,
                 key:Date.now()
             }
         }
         axios.post('https://todolist-82f9d.firebaseio.com/todo1.json',newitem).then(res=>console.log(res.data)).catch(err=>console.log(err))
         this.setState(prevState=>prevState.list.unshift(newitem))
         
         this.todo.value=""
     }

     deleteHandler=(key,e)=>{
        e.preventDefault()
        let users=[...this.state.list]
        console.log(users)
       
        users.splice(key,1)

        this.setState({
            list:users
        })
     }
    
    render() {
        let tdolist=null
       if(!this.state.loading){
            tdolist=(this.state.list.map((lis,index)=><li 
            style={{border:'2px solid black',borderRadius:'15px',backgroundColor:'#eee',border:'3px 3px',margin:'5px',padding:'5px'}}
            type="1" key={lis.key} onClick={this.deleteHandler.bind(this,index)}>{lis.value} X</li>))
       }
        
        
        return (
            <div>
              <form onSubmit={this.onSub}>
                  <input  text="text" ref={(a)=>this.todo=a}  placeholder="enter your task" style={{border:'2px solid #3CBC8D',borderRadius:'15px',backgroundColor:'#ee',border:'3px 3px',margin:'10px',padding:'10px'}} />
                  <button style={{color:'#ggg',border:'2px solid #3CBC8D',margin:'10px',padding:'10px',borderRadius:'15px'}}>Add</button>
                  {tdolist}
                  </form>  
            </div>
        )
    }
}

export default TodoForm