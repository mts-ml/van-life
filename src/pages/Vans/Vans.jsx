import { useState } from 'react';
import { Link, NavLink, useSearchParams, useLocation, useLoaderData } from 'react-router-dom';
import clsx from 'clsx';
import { ThreeDots } from 'react-loader-spinner';
import { getVans } from '../../api';

import './vansStyle.scss';

export function loader() {
   return getVans();
}


export default function Vans() {
   const vans = useLoaderData();
   console.log(vans)

   const [error, setError] = useState(null);

   const [searchParams, setSearchParams] = useSearchParams();

   const typeFilter = searchParams.get('type');

   const pageLocation = useLocation();
   console.log(pageLocation);

   const vanType = (type) => {
      return clsx({
         vans__type: true,
         simple: type === "simple",
         rugged: type === "rugged",
         luxury: type === "luxury"
      })
   }

   const displayedVans = typeFilter ? vans.filter(van => (
      van.type === typeFilter))
      :
      vans;

   if (error) {
      return <h1 className='error__msg' aria-live='assertive'>There was an error: {error.message}</h1>
   }

   return (
      vans.length > 0 ?
         <section className="vans">
            <h2 className="vans__title">Explore our van options</h2>

            <nav className="vans__filter">
               <ul className="vans__list">
                  {/* Renders 3 Links, adds custom className to each one depending on type and applies captilize */}
                  {["simple", "luxury", "rugged"].map(type => (
                     <li key={type} className='vans__li'>
                        <NavLink
                           className={() => clsx(`vans__type-link-${type}`,
                              typeFilter === type && `active-vans-link-${type}`)}
                           to={`?type=${type}`}
                        >
                           {type.charAt(0).toUpperCase() + type.slice(1)}
                        </NavLink>
                     </li>
                  ))}
               </ul>

               <button className={`vans__clear ${typeFilter ? "vans__btn-visible" : ""}`}
                  onClick={() => setSearchParams({})}
               >
                  Clear filters</button>
            </nav>

            <div className="vans__wrapper">
               {displayedVans.map(van => (
                  <div className="vans__van" key={van.id}>
                     <Link
                        to={van.id}
                        state={{
                           searchUrl: searchParams.toString(),
                           type: typeFilter
                        }}
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
         </section >
         :
         <div aria-live='polite'>
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
