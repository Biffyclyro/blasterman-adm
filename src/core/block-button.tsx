import React from "react";

export class BlockButton extends React.Component<{block: {bool: boolean}, id:{x: number, y:number}}, {color: string}> {
	buttonBlock: boolean;

	constructor(props: {block: {bool: boolean}, id:{x: number, y:number}}) {
		super(props);
		this.buttonBlock = props.block.bool;
		if(props.block.bool) {
			this.state = { color: 'danger'};
		} else {
			this.state = {color: 'success'};
		}
	}

	handleClick(): void {
		if(this.buttonBlock) {
			this.setState({color:'success'});	
			this.buttonBlock = false;
			this.props.block.bool = false;
		} else {
			this.setState({color:'danger'});
			this.buttonBlock = true;
			this.props.block.bool = true;
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