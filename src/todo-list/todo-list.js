import React, { Component } from 'react';
import  ToDo  from '../todo/todo';

class ToDoItems extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render() {
		const todo_items = this.props.todo_items;
		return (
			<div className="todo-items-frame">
				<div className="todo-items-body">
					{todo_items.map((todo, index) => {
						return(
							<ToDo 
								key={index}
								todo={todo}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default ToDoItems;