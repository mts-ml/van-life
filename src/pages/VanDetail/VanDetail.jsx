import { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import arrow from '../../assets/images/arrow.png';
import clsx from 'clsx';
import { ThreeDots } from 'react-loader-spinner';

import './vanDetailStyle.scss';


export default function VanDetail() {
   const [van, setVan] = useState({});

   const params = useParams();

   const pageLocation = useLocation();
   console.log(pageLocation);

   const vanFilterState = pageLocation.state?.searchUrl;

   const vanFilterType = pageLocation.state?.type || "all";

   useEffect(() => {
      async function fetchData() {
         const response = await fetch(`/api/vans/${params.id}`);
         const data = await response.json();
         setVan(data.vans);
      }
      fetchData();
   }, []);

   const vanType = clsx({
      van__type: true,
      "vanDetail-simple": van.type === "simple",
      "vanDetail-rugged": van.type === "rugged",
      "vanDetail-luxury": van.type === "luxury"
   })

   return (
      Object.keys(van).length > 0 ?

         <section className="van">
            <Link
               className="van__link"
               to={`..?${vanFilterState}`}
               relative="path"
            >
               <img src={arrow} alt="Picture of a left arrow" />
               <span className="van__span">Back to {vanFilterType} vans</span>
            </Link>

            <img className='van__img' src={van.imageUrl} alt={van.description} />

            <p className={vanType}>{van.type}</p>

            <h2 className="van__name">{van.name}</h2>

            <div className="van__cost">
               <p className="van__price">${van.price}</p>

               <span className="van__daily">/day</span>
            </div>

            <p className="van__description">{van.description}</p>

            <a className='van__rent' href="#" target="_self" rel="noopener noreferrer">Rent this van</a>
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
   );
}
