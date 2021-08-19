import React from "react";
import { Dto } from "../core/dto";
import ConnectionService from "./connectionService";

interface AuthContextData {
	signed: boolean;
	login(): Promise<Dto<string>>
}

export const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export class AuthProvider extends React.Component {
	private readonly httpC = new ConnectionService();

	async login(): Promise<Dto<string>> {
		console.log('teste')
		return await this.httpC.login({
			login: 'teste',
			senha: '1234'
		});
	}
	render() {
		return (
			<AuthContext.Provider value={{ signed: true, login: this.login.bind(this) }}>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
};