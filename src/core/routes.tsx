import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { MapBuilder } from "./builder";
import { Login } from "./login";
import { MapsManager } from "./maps-manager";

export const Routes: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route path='/map-editor/:id' component={MapBuilder} />
				<Route path='/map-editor'>
					<MapBuilder />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/'>
					<MapsManager />
				</Route>
			</Switch>
		</Router>
	);
}