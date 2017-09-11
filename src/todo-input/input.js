import React, { Component } from 'react';

class Input extends Component {
	constructor(props){
		super(props);
		this.state = {
			todo: "",
			error: false
		}

		this.onTaskInput = this.onTaskInput.bind(this);
	}

	onTaskInput(){
		if(this.state.todo !== ""){

		} else {
			this.setState({error: true});
		}
	}

	render() {
		return (
			<div className="todo-input-body">
				<div className="todo-input-group">
					<input
						className="todo-input"
						value={this.state.todo} 
						onChange={(event) => { this.setState({todo: event.target.value}); }}
						onKeyPress={(event) => {
							if((event.keyCode || event.which) === 13){
								this.onTaskInput();
							}
						}}
					/>
					<button
						className="btn-todo"
						onClick={(event) => {
							event.preventDefault();
							this.onTaskInput();
						}}>
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