import { FirstT } from './HomeCon';
import {Link} from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function HomeAff() {
    const [cont,setcont]=useState()
    const [country,setCountry]=useState()
    const {options0,options1, setOptions1}=useContext(FirstT)

    const { selectedValue0,selectedValue1 } = useParams();
    console.log(selectedValue0,selectedValue1);

    const Handleclick=()=>{
        window.location =`/reservation/${selectedValue0}/${selectedValue1}`   
    }
    const optionT = options0[0].optionT;
    useEffect(() => {
      afficher();
    }, []);
    useEffect(() => {
      afficherC();
    }, []);

    const afficher=()=>{
      
       if (selectedValue1 === 'Paris'){
          const optionD = options1[0].optionD;
          setcont(optionD)
       }else if (selectedValue1 === 'Berne'){
          const optionD = options1[1].optionD;
          setcont(optionD)
       }else if (selectedValue1 === 'Dortmund'){
          const optionD = options1[2].optionD;
          setcont(optionD)
       }
    }

    const afficherC=()=>{
      if (selectedValue1 == 'Paris'){
        const optionC = options1[0].optionC;
        setCountry(optionC)
      }else if (selectedValue1 === 'Berne'){
        const optionC = options1[1].optionC;
        setCountry(optionC)
      }else if (selectedValue1 === 'Dortmund'){
        const optionC = options1[2].optionC;
        setCountry(optionC)
      }
   }
   

    return (
     <>
         {/* <h1>Depart: {selectedValue0} </h1> */}
         {/* <h1>Destinataire: {selectedValue1} </h1>
         <h1>Nombre enfants: {selectedValue2} </h1>
         <h1>Nombre adulte: {selectedValue3} </h1>
         <h1>Depart : {selectedDate1}</h1>
         <h1>Retour : {selectedDate2}</h1> */}

         {/* <h1>Retour : {selectedDate2}</h1> */}
         <div className="flight-card">
   <div className="flight-card-header">
     <div className="flight-logo">
     <span className="Price">150$</span>
       <img src="https://book.jetblue.com/assets/header/img/jetblue-white-reg.png" alt=""/>
     </div>
     <div className="flight-data">
         <div className="passanger-details">
           <span className="title">Passanger</span>
           <span className="detail">John Doe</span>
         </div>
         <div className="passanger-depart">
           <span className="title">Depart</span>
           <span className="detail">09:30 AM</span>
         </div>
         <div className="passanger-arrives">
           <span className="title">Arrives</span>
           <span className="detail">13:30 PM</span>
         </div>
       </div>
   </div>
  <div className="flight-card-content">
    <div className="flight-row">
      <div className="flight-from">
        <span className="from-code">
           {optionT}
           </span>
        <span className="from-city">{selectedValue0}, Morroco</span>
      </div>
      <div className="plane">
        <img src="https://cdn.onlinewebfonts.com/svg/img_537856.svg" alt=""/>
      </div>
      <div className="flight-to">
        
          {cont && <span className="to-code">{cont}</span>}
        
        <span className="to-city">{selectedValue1}, {country && <>{country}</>}</span>
      </div>
    </div>
    <div className="flight-details-row">
      <div className="flight-operator">
        <span className="title">OPERATOR</span>
        <span className="detail">Ryanair</span>
      </div>
      <div className="flight-number">
        <span className="title">FLIGHT</span>
        <span className="detail">JT22554D</span>
      </div>
      
    </div>
    <div className="reservFlight-class">
            <input type="submit" onClick={Handleclick} className='reservFlight' value='Reserver Maintenant'/>          
    </div>
  </div>
  
</div>
<div className="flight-card">
   <div className="flight-card-header">
     <div className="flight-logo">
     <span className="Price">200$</span>
       <img src="https://book.jetblue.com/assets/header/img/jetblue-white-reg.png" alt=""/>
     </div>
     <div className="flight-data">
         <div className="passanger-details">
           <span className="title">Passanger</span>
           <span className="detail">Thomas shelby</span>
         </div>
         <div className="passanger-depart">
           <span className="title">Depart</span>
           <span className="detail">09:30 AM</span>
         </div>
         <div className="passanger-arrives">
           <span className="title">Arrives</span>
           <span className="detail">13:30 PM</span>
         </div>
       </div>
   </div>
  <div className="flight-card-content">
    <div className="flight-row">
      <div className="flight-from">
        <span className="from-code">{optionT}</span>
        <span className="from-city">{selectedValue0}, Morroco</span>
      </div>
      <div className="plane">
        <img src="https://cdn.onlinewebfonts.com/svg/img_537856.svg" alt=""/>
      </div>
      <div className="flight-to">
      {cont && <span className="to-code">{cont}</span>}
        <span className="to-city">{selectedValue1},  {country && <>{country}</>}</span>
      </div>
    </div>
    <div className="flight-details-row">
      <div className="flight-operator">
        <span className="title">OPERATOR</span>
        <span className="detail">Jetblue </span>
      </div>
      <div className="flight-number">
        <span className="title">FLIGHT</span>
        <span className="detail">HR69059A</span>
      </div>
      
    </div>
    <div className="reservFlight-class">
            <input type="submit" onClick={Handleclick} className='reservFlight' value='Reserver Maintenant'/>
    </div>
  </div>
  
</div>

<div className="flight-card">
   <div className="flight-card-header">
     <div className="flight-logo">
     <span className="Price">180$</span>
       <img src="https://book.jetblue.com/assets/header/img/jetblue-white-reg.png" alt=""/>
     </div>
     <div className="flight-data">
         <div className="passanger-details">
           <span className="title">Passanger</span>
           <span className="detail">Nicole Max</span>
         </div>
         <div className="passanger-depart">
           <span className="title">Depart</span>
           <span className="detail">09:30 AM</span>
         </div>
         <div className="passanger-arrives">
           <span className="title">Arrives</span>
           <span className="detail">13:30 PM</span>
         </div>
       </div>
   </div>
  <div className="flight-card-content">
    <div className="flight-row">
      <div className="flight-from">
        <span className="from-code">{optionT}</span>
        <span className="from-city">{selectedValue0}, Morroco</span>
      </div>
      <div className="plane">
        <img src="https://cdn.onlinewebfonts.com/svg/img_537856.svg" alt=""/>
      </div>
      <div className="flight-to">
      {cont && <span className="to-code">{cont}</span>}
        <span className="to-city">{selectedValue1},  {country && <>{country}</>}</span>
      </div>
    </div>
    <div className="flight-details-row">
      <div className="flight-operator">
        <span className="title">OPERATOR</span>
        <span className="detail">EL araia </span>
      </div>
      <div className="flight-number">
        <span className="title">FLIGHT</span>
        <span className="detail">AW143209R</span>
      </div>
      
    </div>
    <div className="reservFlight-class">
            <input type="submit" onClick={Handleclick} className='reservFlight' value='Reserver Maintenant'/>
    </div>
  </div>
  
</div>

    </>
    );
  }
  
  export default HomeAff;