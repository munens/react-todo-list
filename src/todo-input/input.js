import React from 'react';

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
			<div className="todo-input">
				<input
					className="input"
					value={this.state.todo} 
					onChange={(event) => { this.setState({todo: event.target.value}); }}
					onKeyPress={(event) => {
						if((event.keyCode || event.which) === 13){
							this.onTaskInput();
						}
					}}
				/>
				<button
					className=""
					onClick={(event) => {
						event.preventDefault();
						this.onTaskInput();
					}}>
				</button>
			</div>
		);
	}
}

export default Input;