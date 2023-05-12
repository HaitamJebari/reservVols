import './Vols.css';
import { ContextSearch } from './Home';
import { useContext } from 'react';

function Vols() {
  const {tng,settng}=useContext()
  return (
    <>
           <h1>{tng}</h1>
    </>
  );
}

export default Vols;