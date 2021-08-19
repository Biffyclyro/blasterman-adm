import './App.css';
import {AuthProvider} from './services/auth';
import {MapBuilder} from './core/builder';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { MapsManager } from './core/maps-manager';
import { Login } from './core/login';

function App() {
  return (
    <AuthProvider>
      <div className="App">
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
      </div>
    </AuthProvider>
  );
}

export default App;
