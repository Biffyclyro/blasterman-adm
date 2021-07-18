import React from 'react';
import ConnectionService from '../services/connectionService';
import { BattlefieldMap } from './dto';
import { BlockButton } from './block-button';
import { Link, match} from 'react-router-dom';


export class MapBuilder extends React.Component<{match?:match} > {
	private elementsList: JSX.Element[] = [];
	private map: BattlefieldMap | undefined;
	private readonly httpC = new ConnectionService();

	componentDidMount(): void {
		if (this.props.match) {
			console.log(this.props.match)
			this.map = this.httpC.fetchMap(1);
			this.elementsList = this.buildMap(this.map);
		} else {
			this.map = {
				tiles: 'area01',
				breakableBlocks: [],
				background: { key: 'area01', url: 'area01' }
			}
			this.elementsList = this.buildMap();
		}
		this.setState({});
	}

	
	saveMap():void {
		const rawElements = this.elementsList.filter(e => e.props.id !== undefined);
		//@ts-ignore
		rawElements.forEach(e => )
		const blocks = rawElements.map(e => e.props.id);
		//this.httpC.saveMap(this.map!);
	}

	editMap(x: number): void {
		console.log('rolou', x)
	}

	buildMap(map?: BattlefieldMap): JSX.Element[] {
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
					if( map && map.breakableBlocks.find(block => {return block.x === j && block.y === i}) ) {
						//element = <button className="btn btn-danger">&nbsp;&nbsp;</button>;
						element = <BlockButton id={`{x:${j}, y:${i}}`} block />
					} else {
						//console.log(this.battlefieldMap.breakableBlocks.includes({x:j, y:i}), {x:j, y:i})
					//	element = <div className="btn btn-success">&nbsp;&nbsp;</div>;

						element = <BlockButton id={`{x:${j}, y:${i}}`} block={false} />
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
				<div>{this.elementsList}</div>
				<br />
				<button onClick={this.saveMap.bind(this)} className="btn btn-primary">Salvar</button>
				<Link to='/' className="btn btn-warning">Cancelar</Link>
			</div>
		);
	}
}