import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import './hostVansStyle.scss';


export default function HostVans() {
   const [hostVans, setHostVans] = useState([]);

   useEffect(() => {
      async function fetchData() {
         const response = await fetch('/api/host/vans');
         const data = await response.json();
         setHostVans(data.vans);
      }
      fetchData();
   }, [])

   const vansArray = hostVans.map(van => (
      <NavLink
         key={van.id}
         className="host-vans__link"
         to={`${van.id}`}>
         <div className="listed-vans__van">
            <div className="listed-vans__model">
               <img width={66} src={van.imageUrl} alt={van.description} />

               <div className="listed-vans__type">
                  <h3 className="listed-vans__name">{van.name}</h3>

                  <span className="listed-vans__price">${van.price}/day</span>
               </div>
            </div>
         </div>
      </NavLink>
   ))


   return (
      <section className="host-vans">
         <h3 className="listed-vans__title host">Your listed vans</h3>

         {hostVans.length > 0 ?
            vansArray
            :
            <>
               <span id='loading'>Loading...</span>
               <ThreeDots
                  visible={true}
                  height={80}
                  width={80}
                  color="rgb(80, 135, 167)"
                  radius="9"
                  ariaLabel="three-dots-loading"
               />
            </>
         }
      </section>
   )
}
