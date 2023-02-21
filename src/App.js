import logo from './logo.svg';
import './App.css';
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        {/* <Home />
        <About />
        <Gallery /> */}
      </Routes>
    </div>
  );
}

export default App;
