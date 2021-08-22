import React, { useState } from "react";
import { AuthContext, User } from "../services/auth";


export class LoginForm extends React.Component<{handleLogin(user: User): void}, User> {
	constructor(props: {handleLogin(user: User): void}){
		super(props);
		this.state = {email:"", password:""};
		console.log(this.state)
	}

	inpuHandler(e: React.ChangeEvent<HTMLInputElement>): void {
		const name: string = e.target.name;
		const value = e.target.value;
		console.log(this.state)
		let newState: User = this.state;

		switch(name) {
			case'password': 
				newState.password = value;
				break;
			case 'email':
				newState.email = value;
		}
		this.setState(newState);
	}	

	render(){
		return (
		<form className="offset-3 mt-3 mb-3 col-6">
			<legend>Login administrativo</legend>
			<div className="mb-3">
				<label htmlFor="login" className="form-label">Login</label>
				<input 
				name="email"
				type="email" className="form-control" id="login" placeholder="name@example.com"
				onChange={this.inpuHandler.bind(this)}
				value={this.state.email}
				></input>
			</div>
			<div className="mb-3">
				<label htmlFor="senha " className="form-label">Senha</label>
				<input 
				name="password"

				onChange={this.inpuHandler.bind(this)}
				type="password" className="form-control" id="senha" placeholder="name@example.com"
					value={this.state.password}
				></input>
			</div>
			<button type="button" onClick={() => this.props.handleLogin(this.state)} className="btn btn-primary position-absolute start-1">Entrar</button>
		</form>);
	}
}

export const Login: React.FC = () => {
	const context = React.useContext(AuthContext);
	
	const handleLogin = (user: User): void => {
		context.login(user);
	}

	return <LoginForm handleLogin={handleLogin} />;
}