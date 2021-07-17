import React from 'react';
import ConnectionService from '../services/connectionService';
import { BattlefieldMap } from './dto';
import { BlockButton } from './block-button';


export class MapBuilder extends React.Component {
	private battlefieldMap: BattlefieldMap;

	constructor(props: any) {
		super(props);
		this.battlefieldMap = new ConnectionService().fetchMap();
	}

	buildMap(): JSX.Element[] {
		const blocklist = [];

		for (let i = 0; i < 19; i++) {
			for (let j = 0; j < 33; j++) {
				let element: JSX.Element;

				if (i % 2 === 0 && j % 2 === 0) {
					element = (
						<button disabled className="btn btn-secondary">
							&nbsp;&nbsp;
						</button>
					);
				} else if (i === 0 || j === 0 || i === 18 || j === 32) {
					element = (
						<button disabled className="btn btn-secondary">
							&nbsp;&nbsp;
						</button>
					);
				} else {
					if( this.battlefieldMap.breakableBlocks.find(block => {return block.x === j && block.y === i}) ) {
						//element = <button className="btn btn-danger">&nbsp;&nbsp;</button>;
						element = <BlockButton block  />
					} else {
						//console.log(this.battlefieldMap.breakableBlocks.includes({x:j, y:i}), {x:j, y:i})
					//	element = <div className="btn btn-success">&nbsp;&nbsp;</div>;

						element = <BlockButton block={false} />
					}
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