import React, { Component } from 'react';
import moment from 'moment';
import './todo.css';

class ToDo extends Component {
	constructor(props){
		super(props);
		this.state = { completed: false };
	}

	componentDidMount() {
		
	}

	componentWillReceiveProps(nextProps) {
		
	}

	render() {
		const todo = this.props.todo;
		return (
			<div className="todo-item">
				<div className="todo-body">
					<div className="todo-text">
						<p className="text">{todo.task}</p>
					</div>
					<div className="todo-date">
						<p className="date">{moment(todo.date).format('MMMM Do, h:mm:ss a')}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ToDo;