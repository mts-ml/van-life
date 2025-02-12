import { useOutletContext } from 'react-router-dom';

import './hostVansInfoStyle.scss';


export default function HostVansMoreDetail() {
   const van = useOutletContext();


   return (
      <section className="host-info">
         <div className="host-info__obj">
            <p className="host-info__key">Name: <span>{van.name}</span></p>
         </div>

         <div className="host-info__obj">
            <p className="host-info__key">Category: <span>{van.type}</span></p>
         </div>

         <div className="host-info__obj">
            <p className="host-info__key">Description: <span>{van.description}</span></p>
         </div>

         <div className="host-info__obj">
            <p className="host-info__key">Visibility: <span>Public</span></p>
         </div>

      </section>
   )
}
