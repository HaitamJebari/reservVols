import { useParams } from 'react-router-dom';
import './Reservation.css';
import {FaPhone , FaEnvelope , FaBuilding } from "react-icons/fa";


function Reservation() {
  const { selectedValue0,selectedValue1 } = useParams();
  console.log(selectedValue0,selectedValue1);


  return (
    <div className="Reservation">
       
          <div className='second-page-heading'>         
          <h4>Book Prefered Deal Here</h4>
          <h2>Make Your Reservation</h2>
          </div>
          <div className="more-info reservation-info">
    
    
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="info-item">
            <FaPhone id='icon'/>
            <h4>Make a Phone Call</h4>
            <a href="00">+212 456 789 123</a>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="info-item">
            <FaEnvelope  id='icon'/>
            <h4>Contact Us via Email</h4>
            <a href="00">company@email.com</a>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="info-item">
            <FaBuilding  id='icon'/>
            <h4>Visit Our Offices</h4>
            <a href="00">24th Street North Avenue Tanger, Morroco</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='form'>

     <div className='faire'>
          <h4>Faire Ton <em>Reservation</em> Par ce <em>formulaire</em></h4>
     </div>

  <form method="post">
    <div className='row'>
    <div className='col-lg-6'>
          <fieldset>
          <label htmlFor="provenance">Ville de départ</label>
                  <select className='inputR' name="">
                      <option selected="selected" >{selectedValue0}</option>
                      <option>Tanger</option>
                  </select>
         </fieldset>
    </div>
 
    <div className='col-lg-6'>  
          <fieldset>      
          <label htmlFor="arrivee">Ville d'arrivée</label>
                  <select className='inputR' name="">
                      <option selected="selected">{selectedValue1}</option>
                      <option>Paris</option>
                      <option>Berne</option>
                      <option>Dortmund</option>
                  </select>
           </fieldset>        
    </div>
    <div className='col-lg-6'>
          <label htmlFor="depart">Date de départ</label>
          <input type="date" name="depart" id="depart" className='date' value="13/04/2020" />
    </div>
    <div className='col-lg-6'>
          <label htmlFor="retour">Date de Retour</label>
          <input type="date" name="retour" id="retour" value="14/04/2020" />
    </div> 

    <div className='col-lg-6'>
          <label htmlFor="adultes">Nombre d'adultes</label>
          <select name="adultes" id="adultes">
            <option selected="selected">0 </option>
            <option>1 </option>
            <option>2 </option>
            <option>3 </option>
            <option>4 </option>
            <option>5 </option>
          </select>
    </div>
    <div className='col-lg-6'>
          <label htmlFor="enfants">Nombre d'enfants</label>
          <select name="enfants" id="enfants">
            <option selected="selected">Selectionner Un Choix</option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
    </div>
    <div className='col-lg-12'>
          <label htmlFor="type">Categorie</label>
          <select name="type" id="type">
            <option selected="selected">Classe Economique</option>
            <option>Classe VIP</option>
          </select>
    </div>
        <div className='col-lg-12 ms-12'>
              <div className="button-submit">
                <button type='button'>Reserver</button>
                 {/* <input type="submit" value="Reserver" name="recherche" id="recherche" /> */}
              </div>
        </div>
      </div>
    </form>
  </div>
        

    </div>
  );
}

export default Reservation;
