import React from "react";
import { AuthContext } from "../services/auth";

export const Login: React.FC = () => {
	const context = React.useContext(AuthContext);
	
	const handleLogin = (): void => {
		context.login();
	}

	return (
		<form className="offset-3 mt-3 mb-3 col-6">
			<legend>Login administrativo</legend>
			<div className="mb-3">
				<label htmlFor="login" className="form-label">Login</label>
				<input type="email" className="form-control" id="login" placeholder="name@example.com"></input>
			</div>
			<div className="mb-3">
				<label htmlFor="senha " className="form-label">Senha</label>
				<input type="password" className="form-control" id="senha" placeholder="name@example.com"></input>
			</div>
			<button type="button" onClick={handleLogin} className="btn btn-primary position-absolute start-1">Entrar</button>
		</form>
	);
}