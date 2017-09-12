import React, { Component } from 'react';
import  ToDo  from '../todo/todo';
import './todo-list.css';

class ToDoItems extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render() {
		const todo_items = this.props.todo_items;
		const completed_todo_items = todo_items.filter((todo, index) => { return todo.status ? todo : null; });
		//console.log(completed_todo_items, todo_items.length === 0, (completed_todo_items && completed_todo_items.length > 0));
		return (
			<div style={todo_items.length === 0 ? {height: 300} : {height: 300 + (todo_items.length)*(60)}} className="todo-items-frame">
				<div className="clear-button">
					<button
						className="btn-clear"
						disabled={(completed_todo_items && completed_todo_items.length === 0)}
						onClick={() => {this.props.clearComplete();} } 
						>Clear Complete
					</button>
				</div>
				<div className="filter-buttons">

				</div>
				
				<div className="todo-items-body">
					{todo_items.map((todo, index) => {
						return(
							<ToDo
								key={index}
								index={index}
								todo={todo}
								updateTaskStatus={this.props.updateTaskStatus}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default ToDoItems;