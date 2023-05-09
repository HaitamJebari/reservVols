import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Footer from "./Components/Footer/Footer"
import Navbar from './Components/Navbar/Navbar'
import Home from "./Components/Container/Home"
import Vols from "./Components/Container/Vols"
import Reservation from './Components/Container/Reservation';
import SingUp from './Components/Container/SignUp';
import Login from './Components/Container/Login';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/reservation' element={<Reservation/>} />
        <Route path='/vols' element={<Vols/>} />
        <Route path='/SingUp' element={<SingUp/>} />
        <Route path='/login' element={<Login/>} />
     </Routes>
    </Router>
    <Footer/> 

       
    </>
      
    
  );
}

export default App;
