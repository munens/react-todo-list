import React, { Component } from 'react';
import Input from './todo-input/input';
import ToDoItems from './todo-list/todo-list';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { todo_items: [] };
  }

  render() {
    let todo_items = this.state.todo_items;
    return (
      <div className="App">
        <Input 
          addItem={(item) => {
            todo_items.push(item);
            this.setState({todo_items});
          }}
        />
        <ToDoItems
          todo_items={todo_items}
        />
        
      </div>
    );
  }
}

export default App;
