import React, { Component } from 'react'

 class TodoList extends Component {
    render() {
        return (
            <div>
             ToDo Things   
             {this.props.users.map((user,index)=><li key={user.id} onClick={this.props.clicked(index)}>{user.name}:{user.age}</li>)}
            </div>
        )
    }
}

export default TodoList