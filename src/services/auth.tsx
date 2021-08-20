import React from "react";
import { Dto } from "../core/dto";
import ConnectionService from "./connectionService";

interface AuthContextData {
	signed: boolean;
	login(): Promise<void>
}

const httpC = new ConnectionService();

export const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
	const [loged, setLoget] = React.useState<boolean >(false);

	const login = async (): Promise<void> => {
		const response = await httpC.login({
			email: 'teste',
			password: '1234'
		});

		if (response.data) {
			setLoget(true);
			httpC.setToken(response.data);
		}
	}
	return (
		<AuthContext.Provider value={{ signed: loged, login }}>
			{children}
		</AuthContext.Provider>
	);
};