import { useOutletContext } from 'react-router-dom';

import './hostVansPricingStyle.scss';


export default function HostVansPricing() {
   const van = useOutletContext();

   
   return (
      <p className='detail-paragraph'>${van.price.toFixed(2)}<span>/day</span></p>
   )
}
