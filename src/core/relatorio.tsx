import React from "react";
import Chart from "react-google-charts";


export class Relatorio extends React.Component {
	render() {
		return (
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
					data={[
						['Jogadores', 'numeros'],
						['2 Jogadores', 11],
						['3 Jogadores', 2],
						['4 Jogadores', 2],
					]}
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
					data={[
						['Mapa', 'Jogado'],
						['area01', 11],
						['area02', 2],
						['area03', 2],
					]}
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
								data={[
									['Pais', 'Jogador'],
									['Brasil', 4],
									['Espanha', 1],
								]}
								options={{
									title: 'Paises mais jogados',
								}}
								rootProps={{ 'data-testid': '1' }}
							/>
						</td>
					</tr>
					<tr>
						<td>
				<b>Tempo médio das partidas: 2:00 minutos</b>
			</td>
		</tr>
		</table>
				
				

			</div>

		);
	}
}