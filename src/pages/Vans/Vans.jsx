import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import './vansStyle.scss';


export default function Vans() {
   const [vans, setVans] = useState([])

   useEffect(() => {
      async function fetchData() {
         const response = await fetch("/api/vans");
         const data = await response.json();
         setVans(data.vans)
      }
      fetchData()
   }, []);

   const vanType = (type) => {
      return clsx({
         vans__type: true,
         simple: type === "simple",
         rugged: type === "rugged",
         luxury: type === "luxury"
      })
   }


   return (
      vans.length > 0 ?
         <section className="vans">
            <h2 className="vans__title">Explore our van options</h2>

            <div className="vans__filter">
               <ul className="vans__list">
                  <li className='vans__li'>
                     <a href="#" target="_self" rel="noopener noreferrer">Simple</a>
                  </li>

                  <li className='vans__li'>
                     <a href="#" target="_self" rel="noopener noreferrer">Luxury</a>
                  </li>

                  <li className='vans__li'>
                     <a href="#" target="_self" rel="noopener noreferrer">Rugged</a>
                  </li>
               </ul>

               <span className="vans__clear">Clear filters</span>
            </div>

            <div className="vans__wrapper">
               {vans.map(van => (
                  <div className="vans__van" key={van.id}>
                     <Link
                        to={`/vans/${van.id}`}
                        className="vans__link"
                        aria-label={`View details for the van ${van.name}, priced at ${van.price} per day.`}
                     >
                        <img className='vans__img' src={van.imageUrl} alt={van.description} />

                        <div className="vans__info">
                           <p className="vans__name">{van.name}</p>

                           <div className="vans__price">
                              <p className="vans__value">${van.price}</p>
                              <span className="vans__price-span">/day</span>
                           </div>
                        </div>

                        <p className={vanType(van.type)}>{van.type}</p>
                     </Link>
                  </div>
               ))}
            </div>
         </section>
         :
         <div>
            <span id='loading'>Loading...</span>
            <ThreeDots
               visible={true}
               height={80}
               width={80}
               color="rgb(80, 135, 167)"
               radius="9"
               ariaLabel="three-dots-loading"
            />
         </div >
   )
}
