import './Navbar.css';
import logo from '../../assets/img/logo.png';

function Navbar() {
  return (
    <>
    
       <nav className="navbar navbar-expand-lg navbar-light ">
           
               <a className="navbar-brand" href="/"><img src={logo} alt='' className='logo'/></a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Toggle" >
                    <span className="navbar-toggler-icon"></span>
               </button>
           <div className="collapse navbar-collapse" id="Toggle">
           <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/reservation">Reservation</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/login">Sign Up</a>
        </li>     
      </ul>
           </div>
           
      </nav>
    </>
  );
}

export default Navbar;