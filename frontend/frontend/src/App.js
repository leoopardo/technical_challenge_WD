import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './pages/home/home';
import { NavBar } from './components/navBar/navBar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
