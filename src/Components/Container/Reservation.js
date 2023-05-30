import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './Reservation.css';

function Reservation() {
  const [Vdepart, setVdepart] = useState('');
  const [Varrivee, setVarrivee] = useState('');
  const [Ddepart, setDdepart] = useState('');
  const [Dretour, setDretour] = useState('');
  const [Adultes, setAdultes] = useState('');
  const [Enfants, setEnfants] = useState('');
  const [Categorie, setCategorie] = useState('');

  const Nave=useNavigate();
  
  const successAlert = () => {
    Swal.fire({
      title: 'Bien Reserver',
      icon: 'success'
    });
  };

  const Reserver = async (event) => {
    event.preventDefault(); 
    setVdepart('');
    setVarrivee('');
    setDdepart('');
    setDretour('');
    setAdultes('');
    setEnfants('');
    setCategorie('');
    console.warn(Vdepart, Varrivee, Ddepart, Dretour, Adultes, Enfants, Categorie);

    const formData = new FormData();
    formData.append('Vdepart', Vdepart);
    formData.append('Varrivee', Varrivee);
    formData.append('Ddepart', Ddepart);
    formData.append('Dretour', Dretour);
    formData.append('Adultes', Adultes);
    formData.append('Enfants', Enfants);
    formData.append('Categorie', Categorie);

    try {
      const result = await fetch('http://localhost:8000/api/reservation', {
        method: 'POST',
        body: formData
      });
      if (result.ok) {
        
        successAlert();
      } else {
        alert('Reservation submission failed.');
      }
    } catch (error) {
      alert(`Reservation submission failed with error: ${error.message}`);
    }

    Nave("/");
  };



  return (
    <div className="Reservation">
       
          <div className='second-page-heading'>         
          <h4>Book Prefered Deal Here</h4>
          <h2>Make Your Reservation</h2>
          </div>
          <div class="more-info reservation-info">
    
    
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-sm-6">
          <div class="info-item">
            <h4>Make a Phone Call</h4>
            <a href="00">+212 456 789 123</a>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="info-item">
            <h4>Contact Us via Email</h4>
            <a href="00">company@email.com</a>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="info-item">
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

  <form >
    <div className='row'>
    <div className='col-lg-6'>
          <fieldset>
          <label htmlFor="provenance">Ville de départ</label>
                  <select className='inputR' value={Vdepart} onChange={(e)=>setVdepart(e.target.value)} >
                      <option selected="selected">Select Your Destinataire</option>
                      <option>Tanger</option>
                  </select>
         </fieldset>
    </div>
 
    <div className='col-lg-6'>  
          <fieldset>      
          <label htmlFor="arrivee">Ville d'arrivée</label>
                  <select className='inputR' value={Varrivee} onChange={(e)=>setVarrivee(e.target.value)}>
                      <option selected="selected">Select Your Destinataire</option>
                      <option>Paris</option>
                      <option>Berne</option>
                      <option>Dortmund</option>
                  </select>
           </fieldset>        
    </div>
    <div className='col-lg-6'>
          <label htmlFor="depart">Date de départ</label>
          <input type="date"  id="depart"  value={Ddepart} onChange={(e)=>setDdepart(e.target.value)} />
    </div>
    <div className='col-lg-6'>
          <label htmlFor="retour">Date de Retour</label>
          <input type="date" id="retour"   value={Dretour} onChange={(e)=>setDretour(e.target.value)} />
    </div> 

    <div className='col-lg-6'>
          <label htmlFor="adultes">Nombre d'adultes</label>
          <select  id="adultes" value={Adultes} onChange={(e)=>setAdultes(e.target.value)}>
            <option selected="selected">0 Adulte</option>
            <option>0 Adulte</option>
            <option>1 Adulte</option>
            <option>2 Adultes</option>
            <option>3 Adultes</option>
            <option>4 Adultes</option>
            <option>5 Adultes</option>
          </select>
    </div>
    <div className='col-lg-6'>
          <label htmlFor="enfants">Nombre d'enfants</label>
          <select  id="enfants" value={Enfants} onChange={(e)=>setEnfants(e.target.value)}>
            <option selected="selected">0 Enfant</option>
            <option>0 Enfant</option>
            <option>1 Enfant</option>
            <option>2 Enfants</option>
            <option>3 Enfants</option>
            <option>4 Enfants</option>
            <option>5 Enfants</option>
          </select>
    </div>
    <div className='col-lg-12'>
          <label htmlFor="type">Categorie</label>
          <select  id="type" value={Categorie} onChange={(e)=>setCategorie(e.target.value)}>
            <option selected="selected">Classe Economique</option>
            <option>Classe Economique</option>
            <option>Classe VIP</option>
          </select>
    </div>
    <div className='col-lg-12 ms-12'>
              <div className="button-submit">
                 <button type='button' id="recherche" onClick={Reserver}><span>Reserver</span></button>
              </div>
        </div>
      </div>
    </form>
  </div>
        

    </div>
  );
}

export default Reservation;
