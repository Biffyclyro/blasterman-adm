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

	login(login: {login:string, senha:string}): Promise<Dto<string>>{
		return this.conn.post(`${this.API_URL}login`, login).then(r => r.data);
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
	}
}
