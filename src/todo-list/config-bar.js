import React, { Component } from 'react';

class ConfigButtons extends Component {
	constructor(props){
		super(props);
		this.state = {
			filter_options: ['all', 'completed', 'incomplete'],
			filter_option: null
		};
	}

	componentDidMount() {
		this.setState({filter_option: this.state.filter_options[0]});
	}

	render() {
		return (
			<div className="config-bar">
				<div className="config-bar-items">
					<div className="clear-button">
						<button
							className={`btn-clear ${this.props.completed_todo_items.length === 0 ? 'disabled': ''}`}
							disabled={(this.props.completed_todo_items.length === 0)}
							onClick={() => this.props.clearComplete() }
						>Clear Complete
						</button>
					</div>
					<div className="filter">
						<div className="filter-group">
							<label className="filter-label">display:</label>
							<select
								className="filter-select"
								defaultValue={this.state.filter_option}
								onChange={(event) => {
									event.preventDefault();
									this.setState({filter_option: event.target.value}, () => this.props.updateFilter(this.state.filter_option));
								}}>
								{this.state.filter_options.map((type, index) => {
									return(<option key={index}>{type}</option>);
								})}
							</select>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ConfigButtons;