import React, { Component } from 'react';
import moment from 'moment';
import './todo.css';

class ToDo extends Component {
	constructor(props){
		super(props);
		this.state = { status: false };
	}

	componentDidMount() {
		this.setState({status: this.props.todo.status});
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
							<p className="date">{moment(todo.date).format('h:mm:ss a')}</p>
						</div>
					</div>
					<div className="task-status">
						<div className="task-status-group">
							<p className="text done">{status && 'done!'}</p>
							<input 
								className="task-checkbox" 
								type="checkbox"
								checked={this.state.status}
								onChange={(event) => { this.props.updateTaskStatus(this.props.index, event.target.checked); }} 
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ToDo;