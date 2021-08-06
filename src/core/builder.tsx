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
			console.log(this.props.match.params)
			//@ts-ignore
			this.httpC.fetchMap(this.props.match.params.id).then(m => {

				//@ts-ignore
				this.map = m.data
				console.log(this.map)
				this.elementsList = this.buildMap(this.map);
				this.setState({});
			});

		} else {
			this.map = {
				tiles: 'area01/tiles-area01.png',
				breakableBlocks: [],
				background: {
					key: 'bg-area01',
					url: 'area01/bg-area01.jpg'
				}
			}
			this.elementsList = this.buildMap();
		}
		this.setState({});
	}

	saveMap():void {
		const rawElements = this.elementsList.filter(e => e.props.id !== undefined && e.props.block.bool);
		const blocks = rawElements.map(e => e.props.id);
		console.log(blocks)
		this.map!.breakableBlocks = blocks;
		this.httpC.saveMap(this.map!);
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
						element = <BlockButton id={{x:j, y:i}} block={{bool: true}} />
					} else {
						//console.log(this.battlefieldMap.breakableBlocks.includes({x:j, y:i}), {x:j, y:i})
					//	element = <div className="btn btn-success">&nbsp;&nbsp;</div>;

						element = <BlockButton id={{x:j, y:i}} block={{bool:false}} />
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
				<Link to='/'><button onClick={this.saveMap.bind(this)} className="btn btn-primary">Salvar</button></Link>
				<Link to='/' className="btn btn-warning">Cancelar</Link>
			</div>
		);
	}
}
