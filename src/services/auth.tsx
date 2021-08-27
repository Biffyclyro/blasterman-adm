import React from "react";
import { Dto } from "../core/dto";
import ConnectionService from "./connectionService";

interface AuthContextData {
	signed: boolean;
	login(user: User): Promise<void>;
	logout(): void;
}

export interface User {
	email: string;
	password: string;
	token?: string;
}

const httpC = new ConnectionService();

export const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
	const [loged, setLoget] = React.useState<boolean >(false);

	const login = async (user: User): Promise<void> => {
		const response = await httpC.login(user);

		if (response.data) {
			setLoget(true);
			httpC.setToken(response.data);
		}
	}

	const logout = (): void => {
		setLoget(false);
		httpC.removeToken();
	}

	return (
		<AuthContext.Provider value={{ signed: loged, login: (user: User) => login(user), logout}}>
			{children}
		</AuthContext.Provider>
	);
};