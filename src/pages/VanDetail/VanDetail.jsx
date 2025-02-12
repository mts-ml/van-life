import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import arrow from '../../assets/images/arrow.png';
import clsx from 'clsx';
import { ThreeDots } from 'react-loader-spinner';

import './vanDetailStyle.scss';


export default function VanDetail() {
   const [van, setVan] = useState({});

   const params = useParams();

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
      simple: van.type === "simple",
      rugged: van.type === "rugged",
      luxury: van.type === "luxury"
   })

   return (
      Object.keys(van).length > 0 ?

         <section className="van">
            <Link to="/vans" className="van__link">
               <img src={arrow} alt="Picture of a left arrow" />
               <span className="van__span">Back to all vans</span>
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
