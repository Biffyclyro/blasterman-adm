import axios from "axios";
import { BattlefieldMap, Dto, MapInfo } from "../core/dto";

export default class ConnectionService {
  private readonly API_URL = 'http://localhost:8090/';
	private readonly conn = axios;
	private static readonly INSTANCE = new ConnectionService();
	
	constructor() {
		if(ConnectionService.INSTANCE) {
			return ConnectionService.INSTANCE;
		} else {
			this.conn.defaults.baseURL = this.API_URL;
		}
	}

	login(login: {email:string, password:string}): Promise<Dto<string>>{
		return this.conn.post('login', {data:login}).then(r => r.data);
	}

	saveMap(map: BattlefieldMap): void {
		const mapDto = {data: map};
		if (map._id) {
			this.conn.post(`update/${map._id}`, mapDto);
		} else {
			this.conn.post('new-map', mapDto);
		}
	}

	listMaps(): Promise<Dto<BattlefieldMap[]>> {
		return this.conn.get('get-maps').then(r => r.data);
	}

	deleteMap(id: string): void {
		this.conn.delete(id);
	}

	fetchMap(mapID: string): Promise<Dto<BattlefieldMap>> {
		return this.conn.get(`map/${mapID}`).then(r => r.data);
	}

	setToken(token: string): void {
		this.conn.defaults.headers.Authorization = `Bearer ${token}`
	}

	removeToken(): void {
		this.conn.defaults.headers.Authorization = undefined;
	}
}