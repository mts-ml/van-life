import { useOutletContext } from 'react-router-dom';

import './hostVansPhotosStyle.scss';


export default function HostVansPhotos() {
   const van = useOutletContext();


   return (

      
      <img className='host-photos__img' src={van.imageUrl} alt={`Van ${van.name}. ${van.description}`}/>
   )
}
