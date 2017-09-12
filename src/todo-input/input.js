import React, { Component } from 'react';

class Input extends Component {
	constructor(props){
		super(props);
		this.state = {
			task: "",
			error: false
		};

		this.onTaskInput = this.onTaskInput.bind(this);
	}

	onTaskInput(){
		if(this.state.task !== ""){
			const todo = {task: this.state.task, status: false, date: Date.now()};
			this.props.addToDo(todo);
			this.setState({todo: ""});
		} else {
			this.setState({error: true});
		}
	}

	render() {
		return (
			<div className="todo-input-body">
				<div className="task-input-group">
					<input
						className="task-input"
						value={this.state.task} 
						onChange={(event) => { this.setState({task: event.target.value}); }}
						onKeyPress={(event) => {
							if((event.keyCode || event.which) === 13){
								this.onTaskInput();
							}
						}}
					/>
					<button
						className="btn-task"
						onClick={(event) => {
							event.preventDefault();
							this.onTaskInput();
						}}>add
					</button>
				</div>
				{this.state.error &&
					<div className="error-msg">
						<p>You have not given anything to do.</p>
					</div>
				}	
			</div>
		);
	}
}

export default Input;