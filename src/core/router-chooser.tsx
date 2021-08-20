import { useContext } from "react"
import { AuthContext } from "../services/auth"
import { Login } from "./login";
import { Routes } from "./routes";

export const RouterChooser: React.FC = () => {
	const {signed} = useContext(AuthContext);
	return signed ? <Routes></Routes> : <Login/> 
}