import './App.css';
import {AuthProvider} from './services/auth';
import {MapBuilder} from './core/builder';

import { MapsManager } from './core/maps-manager';
import { RouterChooser } from './core/router-chooser';

function App() {
  return (
    <AuthProvider>
      <div className="App">
       <RouterChooser/>
      </div>
    </AuthProvider>
  );
}

export default App;
