import React, { Component } from 'react';
import './input.css';

class Input extends Component {
	constructor(props){
		super(props);
		this.state = { task: "", error: false };
		this.onTaskInputSubmit = this.onTaskInputSubmit.bind(this);
	}

	onTaskInputSubmit(){
		if(this.state.task !== ""){
			const todo = {task: this.state.task, status: false, date: Date.now()};
			this.props.addToDo(todo);
			this.setState({task: ""});
		} else {
			this.setState({error: true});
		}
	}

	render() {
		return (
			<div className="todo-input">
				<div className="task-input-group">
					<div className="task-input">
						<input
							className={`input ${this.state.error ? 'error' : '' }`}
							placeholder="what would you like to do?"
							value={this.state.task} 
							onChange={(event) => { this.setState({task: event.target.value}); }}
							onKeyPress={(event) => {
								this.setState({error: false});
								if((event.keyCode || event.which) === 13){
									this.onTaskInputSubmit();
								}
							}}
						/>
						{this.state.error &&
							<div className="error-msg">
								<p className="error-text">You have not given anything to do.</p>
							</div>
						}
					</div>
					<div className="task-button">
						<button
							className="btn-submit"
							onClick={(event) => {
								event.preventDefault();
								this.onTaskInputSubmit();
							}}>add
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Input;