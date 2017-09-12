import React, { Component } from 'react';

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
						<p>{todo.task}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ToDo;