import axios from "axios";
import { BattlefieldMap, Dto, MapInfo } from "../core/dto";

export default class ConnectionService {
  private readonly API_URL = 'http://localhost:8090/';
	private readonly conn = axios;
	private static readonly INSTANCE = new ConnectionService();
	
	constructor() {
		if(ConnectionService.INSTANCE) {
			return ConnectionService.INSTANCE;
		}
	}

	saveMap(map: BattlefieldMap): void {
		const mapDto = {data: map};
		if (map._id) {
			this.conn.post(`${this.API_URL}update/${map._id}`, mapDto);
		} else {
			this.conn.post(`${this.API_URL}new-map`, mapDto);
		}
	}

	listMaps(): Promise<Dto<BattlefieldMap[]>> {
		return this.conn.get(`${this.API_URL}get-maps`).then(r => r.data);
	}

	deleteMap(id: string): void {
		this.conn.delete(`${this.API_URL}${id}`);
	}

	fetchMap(mapID: string): Promise<Dto<BattlefieldMap>> {
		return this.conn.get(`${this.API_URL}map/${mapID}`).then(r => r.data);
		const battleFieldMap = {
			tiles: 'area01/tiles-area01.png',
			breakableBlocks: [
				{ x: 4, y: 1 }, { x: 5, y: 1 }, { x: 14, y: 1 }, { x: 21, y: 1 }, { x: 22, y: 1 },
				{ x: 5, y: 2 }, { x: 7, y: 2 }, { x: 21, y: 2 }, { x: 23, y: 2 },
				{ x: 3, y: 3 }, { x: 14, y: 3 }, { x: 16, y: 3 }, { x: 22, y: 3 },
				{ x: 3, y: 4 }, { x: 7, y: 4 }, { x: 9, y: 4 }, { x: 17, y: 4 }, { x: 19, y: 4 }, { x: 21, y: 4 },
				{ x: 9, y: 5 }, { x: 10, y: 5 }, { x: 11, y: 5 }, { x: 22, y: 5 }, { x: 24, y: 5 },
				{ x: 3, y: 6 }, { x: 9, y: 6 }, { x: 11, y: 6 }, { x: 17, y: 6 }, { x: 23, y: 6 },
				{ x: 2, y: 7 }, { x: 3, y: 7 }, { x: 4, y: 7 }, { x: 6, y: 7 }, { x: 15, y: 7 }, { x: 16, y: 7 }, { x: 17, y: 7 },
				{ x: 7, y: 8 }, { x: 11, y: 8 }, { x: 13, y: 8 },
				{ x: 6, y: 9 }, { x: 7, y: 9 }, { x: 8, y: 9 }, { x: 13, y: 9 }, { x: 17, y: 9 },
				{ x: 11, y: 10 }, { x: 13, y: 10 }, { x: 15, y: 10 }, { x: 17, y: 10 },
				{ x: 7, y: 11 }, { x: 16, y: 11 }, { x: 17, y: 11 }, { x: 18, y: 11 }, { x: 24, y: 11 },
				{ x: 17, y: 12 },
				{ x: 11, y: 13 }, { x: 15, y: 13 }, { x: 19, y: 13 }, { x: 24, y: 13 },
				{ x: 9, y: 14 }, { x: 19, y: 14 }, { x: 21, y: 14 }, { x: 23, y: 14 },
				{ x: 5, y: 15 }, { x: 9, y: 15 }, { x: 15, y: 15 }, { x: 23, y: 15 }, { x: 24, y: 15 },
				{ x: 3, y: 16 }, { x: 7, y: 16 }, { x: 17, y: 16 },
				{ x: 3, y: 17 }, { x: 10, y: 17 }, { x: 21, y: 17 }
			],
			background: {
				key: 'bg-area01',
				url: 'area01/bg-area01.jpg'
			}
		}
	}
}
