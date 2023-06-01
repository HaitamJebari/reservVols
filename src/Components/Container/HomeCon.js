import React, { useState ,createContext} from 'react';
export const FirstT=createContext()

const HomeCon = ({children}) => {
  const [options0, setOptions0] = useState([
    { value: 'Tanger', label: 'Tanger' , optionT:'TNG'},
  ]);
  const [options1, setOptions1] = useState([
    { value: 'Paris', label: 'Paris', optionD:'CDG',optionC:'France'},
    { value: 'Berne', label: 'Berne', optionD:'BRN' ,optionC:'Suisse'},
    { value: 'Dortmund', label: 'Dortmund',  optionD:'DTM' ,optionC:'Allmand'}
  ]);
  


 
  
 
  const [selectedValue0, setSelectedValue0] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');



  const handleChange0 = (event) => {
    setSelectedValue0(event.target.value);
  };
  const handleChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };


  return (
    <>
      <FirstT.Provider value={{options0, setOptions0,options1, setOptions1,selectedValue0, setSelectedValue0,handleChange0,selectedValue1, setSelectedValue1,handleChange1}}>
                {children}
      </FirstT.Provider>
    </>
  );
};

export default HomeCon;
