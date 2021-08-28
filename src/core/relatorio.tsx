import React from "react";
import Chart from "react-google-charts";
import ConnectionService from "../services/connectionService";
import { RoomMetada } from "./dto";


export class Relatorio extends React.Component {
	private readonly httpC = new ConnectionService();
	private roomMetadata: RoomMetada[] | undefined;
	private relatorio = <div></div>;
	private jogadores: any;
	private mapas: any;
	private paises: any;
	private tempoMedio = 0;

	componentDidMount(): void {
		this.httpC.relatorio().then(m => {
			this.roomMetadata = m.data!;
			this.calculateRelatorio();
			this.buildRelatorio();
			this.setState({});
		});
	}

	calculateRelatorio(): void {
		if (this.roomMetadata) {
			let tempoMedio = 0;
			const paisJogadores = [0, 0];
			const jogadoresPorPartida = [0, 0, 0];
			const mapaJogado = [0, 0];

			this.roomMetadata.forEach(rm => {
				tempoMedio += rm.matchTime;
				jogadoresPorPartida[rm.numPlayers - 2]++;
				if (rm.roomName === 'mapa padrão') {
					mapaJogado[0]++;
				} else {
					mapaJogado[1]++
				}
				rm.countries.forEach(c => {
					if(c === 'Brasil') {
						paisJogadores[0]++;
					} else {
						paisJogadores[1]++;
					}
				});				
			});

			this.jogadores = [['Jogadores', 'numeros'],
												['2 Jogadores', jogadoresPorPartida[0]],
												['3 Jogadores', jogadoresPorPartida[1]],
												['4 Jogadores', jogadoresPorPartida[2]],
											];
			
			this.paises = [['Mapa', 'Jogado'],
											['Brasil', paisJogadores[0]],
											['Espanha', paisJogadores[1]],
										];

			this.mapas = [['Pais', 'Jogador'],
										['Mapa padrão', mapaJogado[0]],
										['Mapa novo', mapaJogado[1]],
									];

			this.tempoMedio = tempoMedio / this.roomMetadata.length;
		}
	}

	buildRelatorio(): void {
		this.relatorio = (
			<div>
				<h2 className="offset-1 mt-3">Dados sobre as partidas</h2>
				<table className="offset-1 mt-3">
					<tr>
						<td>
							<Chart
								width={'500px'}
								height={'300px'}
								chartType="PieChart"
								loader={<div>Loading Chart</div>}
								data={this.jogadores}
								options={{
									title: 'Jogadores por partida',
								}}
								rootProps={{ 'data-testid': '1' }}
							/>
						</td>
						<td>
							<Chart
								width={'500px'}
								height={'300px'}
								chartType="PieChart"
								loader={<div>Loading Chart</div>}
								data={this.mapas}
								options={{
									title: 'Mapas mais jogados',
								}}
								rootProps={{ 'data-testid': '1' }}
							/>
						</td>
						<td>
							<Chart
								width={'500px'}
								height={'300px'}
								chartType="PieChart"
								loader={<div>Loading Chart</div>}
								data={this.paises}
								options={{
									title: 'Paises mais jogados',
								}}
								rootProps={{ 'data-testid': '1' }}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<b>Tempo médio das partidas: {this.tempoMedio} minutos</b>
						</td>
					</tr>
				</table>
			</div>
		);
	}

	render() {
		return this.relatorio;
	}
}