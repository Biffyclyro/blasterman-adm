import './App.css';
import {MapBuilder} from './core/builder';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { MapsManager } from './core/maps-manager';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/map-editor/:id' component={MapBuilder} />
          <Route path='/map-editor'>
            <MapBuilder/>
          </Route>
          <Route path='/'>
            <MapsManager />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
