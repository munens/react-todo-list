import React, { Component } from 'react';
import  ToDo  from '../todo/todo';
import ConfigBar from './config-bar';
import './todo-list.css';

class ToDoItems extends Component {
	constructor(props){
		super(props);
		this.state = {
			filter_type: 'all'
		};
	}

	render() {
		const todo_items = this.props.todo_items;
		const completed_todo_items = todo_items.filter((todo, index) => { return todo.status ? todo : null; });
		//console.log(completed_todo_items, todo_items.length === 0, (completed_todo_items && completed_todo_items.length > 0));
		return (
			<div style={todo_items.length === 0 ? {height: 300} : {height: 300 + (todo_items.length)*(60)}} className="todo-items-frame">
				<ConfigBar 
					completed_todo_items={completed_todo_items}
					clearComplete={this.props.clearComplete}
					updateFilter={(filter_type) => {console.log(filter_type); this.setState({filter_type})}}
				/>
				<div className="todo-items-body">
					{todo_items.length === 0 &&
						<div className="no-items-text">
							<p className="text">There are no to-do items to show at this time.</p>
						</div>
					}
					{todo_items.length > 0 && todo_items.map((todo, index) => {
						if(this.state.filter_type === 'all'){
							return(
								<ToDo
									key={index}
									index={index}
									todo={todo}
									updateTaskStatus={this.props.updateTaskStatus}
								/>
							);
						} else if(this.state.filter_type === 'completed'){
							if(todo.status){
								return(
									<ToDo
										key={index}
										index={index}
										todo={todo}
										updateTaskStatus={this.props.updateTaskStatus}
									/>
								);
							} 
						} else {
							if(!todo.status){
								return(
									<ToDo
										key={index}
										index={index}
										todo={todo}
										updateTaskStatus={this.props.updateTaskStatus}
									/>
								);
							} 
						}
						
					})}
				</div>
			</div>
		);
	}
}

export default ToDoItems;