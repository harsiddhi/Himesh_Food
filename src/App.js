import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Image from './components/Image';
import Gallery from './components/Gallery';
import {BrowserRouter,Route, Routes ,Link} from 'react-router-dom' 
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import DemoClass from './components/DemoClass';

function App() {
  return (
  
  
  
   <BrowserRouter>
    <Navbar/>,
   <Routes>
     <Route path="/gallery" element={<Gallery/>} ex> </Route>
   </Routes>
   <Routes>
     <Route path="/about" element={<About/>}> </Route>
   </Routes>
   <Routes>
     <Route path="/contact" element={<Contact/>}> </Route>
   </Routes>
   <Routes>
     <Route path="/home" element={<Home/>}> </Route>
   </Routes>
   <Routes>
     <Route path="/classstate" element={<DemoClass/>}> </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
