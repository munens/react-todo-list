import React, { Component } from 'react';

class ConfigButtons extends Component {
	constructor(props){
		super(props);
		this.state = {
			filter_options: ['All', 'complete', 'incomplete'],
			filter_option: null
		};
	}

	componentDidMount() {
		this.setState({filter_option: this.state.filter_options[0]});
	}

	render() {
		return (
			<div>
				<div className="clear-button">
					<button
						className="btn-clear"
						disabled={(this.props.completed_todo_items.length === 0)}
						onClick={() => this.props.clearComplete() } 
					>Clear Complete
					</button>
				</div>
				<div className="filter-buttons">
					<select
						defaultValue={this.state.filter_option}
						onChange={(event) => {
							event.preventDefault();
							console.log(event.target.value);
							this.setState({filter_option: event.target.value}, () => this.props.updateFilter(this.state.filter_option));
						}}>
						{this.state.filter_options.map((type, index) => {
							return(<option key={index}>{type}</option>);
						})}
					</select>
				</div>
			</div>
		);
	}
}

export default ConfigButtons;