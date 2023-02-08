
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Footer from "./Components/Footer"
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
     0 <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutus" element={<Aboutus/>}></Route>
      <Route path='/contactus' element={<Contactus/>}></Route>
     </Routes>
  <Footer/>
    </div>
  );
}

export default App;
