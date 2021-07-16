import React from 'react';

export class MapBuilder extends React.Component {
	buildMap(): JSX.Element[] {
		const blocklist = [];

		for (let i = 0; i < 17; i++) {
			for (let j = 0; j < 31; j++) {
				let element;

				if (i % 2 !== 0 && j % 2 !== 0) {
					element = (
						<button disabled className="btn btn-secondary">
							&nbsp;&nbsp;
						</button>
					);
				}
				else {
					element = <div className="btn btn-success">&nbsp;&nbsp;</div>;
				}
				blocklist.push(element);
			}
			blocklist.push(<br />);
		}
		return blocklist;
	}

	render() {
		return (
			<div>
				<h2>Editor de mapas</h2>
				<div>{this.buildMap()}</div>
				<br />
				<div className="btn btn-primary">Salvar</div>
				<div className="btn btn-warning">Cancelar</div>
			</div>
		);
	}
}