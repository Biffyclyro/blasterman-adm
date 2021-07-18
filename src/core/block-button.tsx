import React from "react";

export class BlockButton extends React.Component<{block: boolean, id:string}, {color: string}> {
	buttonBlock: boolean;

	constructor(props: {block: boolean, id:string}) {
		super(props);
		this.buttonBlock = props.block;
		if(props.block) {
			this.state = { color: 'danger'};
		} else {
			this.state = {color: 'success'};
		}
	}

	handleClick(): void {
		if(this.buttonBlock) {
			this.setState({color:'success'});	
			this.buttonBlock = false;
		} else {
			this.setState({color:'danger'});
			this.buttonBlock = true;
		}
	}

	render() {
		return (
			<button 
				className={"btn btn-" + this.state.color} 
				onClick={this.handleClick.bind(this)}
				>&nbsp;&nbsp;</button>
		);
	}
}