import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FirstT } from './HomeCon';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import swal from 'sweetalert';
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
import img4 from '../../assets/img/img4.jpg'
import img5 from '../../assets/img/img5.jpg'
import img6 from '../../assets/img/img6.jpg'
import off1 from '../../assets/img/offers-1.jpg'
import off2 from '../../assets/img/offers-2.jpg'
import off3 from '../../assets/img/offers-3.jpg'
import vol1 from '../../assets/img/vol1.png'
// Other imports...

function Home() {
  const { options0, setOptions0, options1, setOptions1, selectedValue0, setSelectedValue0, handleChange0, selectedValue1, setSelectedValue1, handleChange1 } = useContext(FirstT);
  const handle = () => {
    if (selectedValue0 === '' || selectedValue1 === '') {
      swal("Error!", "You have to fill all the fields!", "error");
    } else {
      console.log('navigate');
      window.location = `/homeAff/${selectedValue0}/${selectedValue1}`;
    }
  }
  return (
    <>
      <div className='Main-Photo'>
        <div className='contenu-blur'>
          <div className='line'></div>
          <h2>Welcome</h2>
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
                <div className='col-lg-6 sm-12'>



                  <h4>Origin :</h4>
                  <select
                  className='inputS'
                  value={selectedValue0}
                  onChange={handleChange0}
                  // onChange={handleChange0}
                  // onBlur={handleInputBlur}
                  // style={{
                  //   borderColor: input1Error
                  //     ? 'red'
                  //     : input1Active
                  //     ? 'green'
                  //     : '',
                  // }}
                  // style={{
                  //   borderColor: input1Error ? 'red' : input1Active ? 'green' : '',
                  // }}
                >
                    <option>Select Your Option</option>
                    {options0.map((option) => (
                      <option  key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                    
                    
                  </select>






                  </div>
                <div className='col-lg-6 sm-12'>
                  <h4>Destinataire :</h4>
                  <select
                    className='inputS'
                    value={selectedValue1}
                    onChange={handleChange1}
                    // style={{
                    //   borderColor: input2Error ? 'red' : input2Active ? 'green' : '',
                    // }}
                  >                    
                      <option>Select Your Option</option>
                    {options1.map((option) => (
                      <option  key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>                
  
               
                <div className='col-lg-6 sm-12'>
                   {/* <input type='submit'  value='search'/> */}
                   <Link 
                  className='buttonR'  
                  onClick={handle} 
                  type='submit' 
                  // to='/homeAff'
                  >Search
                  </Link>
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
                               {/* <div className='info'>
                               <h4 className='infotext'>France</h4>
                                    <div className="button" >
                                        <a href="/reservation"  id='res'>Faire une Reservation</a>
                                    </div> 
                               </div>     */}
                               <div className="flip-card">
                                  <div className="flip-card-inner">
                                      <div className="flip-card-front">
                                          
                                          <ul className='ull'>
                                                <li className='listeee'>
                                                    <div className='dives'>F</div>
                                                </li>
                                                 <li className='listeee'>
                                                    <div className='dives'>R</div>
                                                </li>
                                                <li className='listeee'>
                                                    <div className='dives'>A</div>
                                                </li>
                                                <li className='listeee'>
                                                    <div className='dives'>N</div>
                                                </li>
                                                <li className='listeee'>
                                                    <div className='dives'>C</div>
                                                </li>
                                                <li className='listeee'>
                                                    <div className='dives'>E</div>
                                                </li>
                                            </ul>
                                      </div>
                                      <div className="flip-card-back">
                                          
                                
                                          <button className="butnhove"><a href="/reservation" className='maintbutn'>Reserve</a></button>
                                          <span></span>
                                      </div>
                                  </div>
                              </div>
                          </div>                                                                   
               </div>

                <div className='col-lg-4 md-6 ms-12'>            
                         <div className='Cimg'>
                               <img src={off2} />
                               {/* <div className='info'>
                               <h4 className='infotext'>Suisse</h4>
                               <div className='text'>
                                  Tanger - Berne
                               </div>
                               <img src={vol1} id='imgvol'/>
                                    <div className="button" >
                                        <a href="/reservation" id='res'>Faire une Reservation</a>
                                    </div> 
                               </div>     */}
                               <div className="flip-card">
                                  <div className="flip-card-inner">
                                      <div className="flip-card-front">
                                          <ul className='ull'>
                                                <li className='listeee'>
                                                    <div className='dives'>S</div>
                                                </li>
                                                 <li className='listeee'>
                                                    <div className='dives'>U</div>
                                                </li>
                                                <li className='listeee'>
                                                    <div className='dives'>I</div>
                                                </li>
                                                <li className='listeee'>
                                                    <div className='dives'>S</div>
                                                </li>
                                                <li className='listeee'>
                                                    <div className='dives'>S</div>
                                                </li>
                                                <li className='listeee'>
                                                    <div className='dives'>E</div>
                                                </li>
                                            </ul>
                                      </div>
                                      <div className="flip-card-back">
                                      <button className="butnhove"><a href="/reservation" className='maintbutn'>Reserve</a></button>
                                          <span></span>
                                      </div>
                                  </div>
                              </div>
                         </div>    
                                              
                </div>

                <div className='col-lg-4 md-6 ms-12'>            
                         <div className='Cimg'>
                             <img src={off3} />
                               {/* <div className='info'>
                               <h4 className='infotext'>Germany</h4>
                               <div className='text'>
                                  Tanger - Dortmund
                               </div>
                               <img src={vol1} id='imgvol'/>
                                    <div className="button">
                                        <a href="/reservation" id='res'>Faire une Reservation</a>
                                    </div> 
                               </div>     */}
                               <div className="flip-card">
                                  <div className="flip-card-inner">
                                      <div className="flip-card-front">
                                          <ul className='ull'>
                                                <li className='listeee'>
                                                    <div className='dives'>G</div>
                                                </li>
                                                 <li className='listeee'>
                                                    <div className='dives'>E</div>
                                                </li>
                                                <li className='listeee'>
                                                    <div className='dives'>R</div>
                                                </li>
                                                <li className='listeee'>
                                                    <div className='dives'>M</div>
                                                </li>
                                                <li className='listeee'>
                                                    <div className='dives'>A</div>
                                                </li>
                                                <li className='listeee'>
                                                    <div className='dives'>N</div>
                                                </li>
                                                <li className='listeee'>
                                                    <div className='dives'>Y</div>
                                                </li>
                                            </ul>
                                      </div>
                                      <div className="flip-card-back">
                                      <button className="butnhove"><a href="/reservation" className='maintbutn'>Reserve</a></button>
                                          <span></span>
                                      </div>
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
