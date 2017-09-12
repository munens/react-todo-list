import React, { Component } from 'react';
import moment from 'moment';
import './todo.css';

class ToDo extends Component {
	constructor(props){
		super(props);
		this.state = { status: false };
	}

	componentWillReceiveProps(nextProps) {
		this.setState({status: nextProps.todo.status});
	}

	render() {
		const todo = this.props.todo;
		const status = this.state.status;
		return (
			<div className="todo-item">
				<div className="todo-body">
					<div className="task-info">
						<div className="todo-text">
							<p className={`text ${status ? 'complete' : ''}`} >{todo.task}</p>
						</div>
						<div className="todo-date">
							<p className="date">{moment(todo.date).format('MMMM Do, h:mm a')}</p>
						</div>
					</div>
					<div className="task-status">
						<input 
							className="task-checkbox" 
							type="checkbox"
							value={status}
							onChange={(event) => { this.props.updateTaskStatus(this.props.index, event.target.checked); }} 
						/>
						<label className="status-label">complete</label>
					</div>
				</div>
			</div>
		);
	}
}

export default ToDo;