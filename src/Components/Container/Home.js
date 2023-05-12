import './Home.css';
import {Carousel} from 'react-bootstrap'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
import img4 from '../../assets/img/img4.jpg'
import img5 from '../../assets/img/img5.jpg'
import img6 from '../../assets/img/img6.jpg'
import off1 from '../../assets/img/offers-1.jpg'
import off2 from '../../assets/img/offers-2.jpg'
import off3 from '../../assets/img/offers-3.jpg'
import vol1 from '../../assets/img/vol1.png'
import { createContext, useState } from 'react';
export const ContextSearch=createContext()
function Home() {
  
  const [tng,settng]=useState()
  
  return (
    <>
           <div className='Main-Photo'>
            <div className='contenu-blur'>
             <h5>Explore The World</h5>
             <div className='line'></div>
             <h2>Welcome To Hars</h2>
             <p>Find cheap flight tickets on HARS</p>
             <p className='p2'>The most simple site in which you will find the best offers</p>  
             </div>   
             <div className='blur-bg'></div>
           </div>
            <div className="notification">
              <p>Travel,You're Not a Tree 😎</p>
              <span className="notification__progress"></span>
            </div>
           <div className='container'>
           <div className='search'>
             <div className='row'>            
                <div className='col-lg-3 sm-12'>
                  <h4>Origin :</h4>
                  <select className='inputR' name="">
                      <option selected="selected">Select Your origin</option>
                      <option>Tanger</option>
                  </select>                
                  </div>
                <div className='col-lg-3 sm-12'>
                  <h4>Destinataire :</h4>
                  <select className='inputR' name="">
                      <option selected="selected">Select Your Destinataire</option>
                      <option>Paris</option>
                      <option>Berne</option>
                      <option>Dortmund</option>
                  </select>
                </div>                
                <div className='col-lg-3 sm-12'>
                  <h4>Départ le :</h4>
                  <input type='date' className='inputR' placeholder="Type your text"/>
                </div>
                <div className='col-lg-3 sm-12'>
                  <h4>Retour le :</h4>
                  <input type='date' className='inputR' placeholder="Type your text"/>
                </div>
                <div className='col-lg-6'>
                  <h4>Nombre d'enfants</h4>
                  <select className='inputS' >
                      <option selected="selected">0 enfant</option>
                      <option>1 enfant</option>
                      <option>2 enfants</option>
                      <option>3 enfants</option>
                      <option>4 enfants</option>
                      <option>5 enfants</option>
                  </select>
                </div>
                <div className='col-lg-6'>
                  <h4>Nombre d'adultes</h4>
                  <select className='inputS' >
                      <option selected="selected">0 Adulte</option>
                      <option>1 Adulte</option>
                      <option>2 Adultes</option>
                      <option>3 Adultes</option>
                      <option>4 Adultes</option>
                      <option>5 Adultes</option>
                  </select>
                </div>
                <div className='col-lg-12 sm-12'>
                   <input type='submit' className='buttonR' value='search'/>
                </div>
             </div>
            </div>
          </div>


        
          <div className='Main-galerie'>     
              <h2 className='cities'>The Most Beautiful <em>Cities</em></h2>      
            <div className='container'>    
              <div className='galerie'>
                  <Carousel>
                     <Carousel.Item>
                        <img id='carous' src={img2} className='d-d-block w-70' alt='First Slide'/>
                        <h2 className='caroustext'>France</h2>
                     </Carousel.Item>
                     <Carousel.Item>
                        <img id='carous' src={img3} className='d-d-block w-70' alt='Second Slide'/>
                        <h2 className='caroustext'>Hawaii</h2>
                     </Carousel.Item>
                     <Carousel.Item>
                        <img id='carous' src={img4} className='d-d-block w-70' alt='Third Slide'/>
                        <h2 className='caroustext'>Germany</h2>
                     </Carousel.Item>
                     <Carousel.Item>
                        <img id='carous' src={img5} className='d-d-block w-70' alt='Third Slide'/>
                        <h2 className='caroustext'>Suisse</h2>
                     </Carousel.Item>
                     <Carousel.Item>
                        <img id='carous' src={img6} className='d-d-block w-70' alt='Third Slide'/>
                        <h2 className='caroustext'>Belgium</h2>
                     </Carousel.Item>
                  </Carousel>
              </div>
          </div>
        </div>
    

      <div className='container'>
          <div className='row'>
              <div className='col-lg-6 offset-lg-3'>
                  <h2 className='offrs'>Best Weekly Offers</h2>
              </div>
          </div>   
          <div className='row'>
          <div className='col-lg-4 md-6 ms-12'>   
                         <div className='Cimg'>
                             <img src={off1} />
                               <div className='info'>
                               <h4 className='infotext'>France</h4>
                               <div className='text'>
                                  Tanger - Paris
                               </div>
                               <img src={vol1} id='imgvol'/>
                                    <div className="button" >
                                        <a href="/reservation"  id='res'>Faire une Reservation</a>
                                    </div> 
                               </div>    
                          </div>                                              
               </div>

                <div className='col-lg-4 md-6 ms-12'>            
                         <div className='Cimg'>
                               <img src={off2} />
                               <div className='info'>
                               <h4 className='infotext'>Suisse</h4>
                               <div className='text'>
                                  Tanger - Berne
                               </div>
                               <img src={vol1} id='imgvol'/>
                                    <div className="button" >
                                        <a href="/reservation" id='res'>Faire une Reservation</a>
                                    </div> 
                               </div>    
                         </div>    
                                              
                </div>

                <div className='col-lg-4 md-6 ms-12'>            
                         <div className='Cimg'>
                             <img src={off3} />
                               <div className='info'>
                               <h4 className='infotext'>Germany</h4>
                               <div className='text'>
                                  Tanger - Dortmund
                               </div>
                               <img src={vol1} id='imgvol'/>
                                    <div className="button">
                                        <a href="/reservation" id='res'>Faire une Reservation</a>
                                    </div> 
                               </div>    
                         </div>    
                                              
                </div>
          </div>     
      </div>
      
    </>
  );
}

export default Home;