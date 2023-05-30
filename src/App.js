import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Footer from "./Components/Footer/Footer"
import Navbar from './Components/Navbar/Navbar'
import Home from "./Components/Container/Home"
// import Vols from "./Components/Container/Vols"
import Reservation from './Components/Container/Reservation';
import SingUp from './Components/Container/SignUp';
import Login from './Components/Container/Login';
import HomeAff from './Components/Container/HomeAff';
import HomeCon from './Components/Container/HomeCon';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
     <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        <Route path='/reservation/:selectedValue0/:selectedValue1' element={<Reservation/>} />
        <Route path='/reservation' element={<Reservation/>} />
        {/* <Route path='/vols' element={<Vols/>} /> */}
        <Route path='/SingUp' element={<SingUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="/" element={<HomeCon><Home/></HomeCon>} ></Route>
        <Route path="/homeAff/:selectedValue0/:selectedValue1" element={<HomeCon><HomeAff/></HomeCon>} />

     </Routes>
    </Router>
    <Footer/> 

       
    </>
      
    
  );
}

export default App;
