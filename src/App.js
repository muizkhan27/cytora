import { Outlet } from "react-router-dom";

import './styles/App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h2>Star Wars</h2>
      <Navbar />

      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
