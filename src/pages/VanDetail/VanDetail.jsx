import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import arrow from '../../assets/images/arrow.png';
import clsx from 'clsx';

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
      // ADICIONAR UM LOADING ENQUANTO NÃO DER O FETCH -----------------------------------
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

         <p className="van__description">
            The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!
         </p>

         <a className='van__rent' href="#" target="_self" rel="noopener noreferrer">Rent this van</a>
      </section>
   )
}
