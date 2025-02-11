import { useEffect, useState } from 'react';
import { useParams, Link, NavLink, Outlet } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import arrow from '../../../assets/images/arrow.png';
import clsx from 'clsx';

import './hostVansDetailStyle.scss';


export default function HostVansDetail() {

   const [hostVansDetail, setHostVansDetail] = useState([]);

   const params = useParams();

   useEffect(() => {
      async function fetchData() {
         try {
            const response = await fetch(`/api/host/vans/${params.id}`);
            const data = await response.json();
            setHostVansDetail(data.vans);
         } catch (error) {
            console.log(error);
         }
      }
      fetchData();
   }, []);

   const hostVans = hostVansDetail.map(van => {
      const typeClass = clsx({
         "host-detail__type": true,
         rugged: van.type === "rugged",
         simple: van.type === "simple",
         luxury: van.type === "luxury",
      })



      return (
         <div key={van.id} className="host-detail__container">
            <div className="host-detail__van">
               <img className='host-detail__img' src={van.imageUrl} alt={van.description} />

               <div className="host-detail__wrapper">
                  <p className={typeClass}>{van.type}</p>

                  <h2 className="host-detail__name">{van.name}</h2>

                  <div className="host-detail__price">
                     <p className="host-detail__price-day">${van.price}</p>
                     <span className="host-detail__day">/day</span>
                  </div>
               </div>
            </div>

            <ul className="host-detail__list">
               <li className="host-detail__li">
                  <NavLink
                     className={({ isActive }) => `host-detail__ul-link ${isActive ? "active" : ''}`}
                     to="" // IT'S INDEX
                     end
                  >
                     Details</NavLink>
               </li>

               <li className="host-detail__li">
                  <NavLink
                     className={({ isActive }) => `host-detail__ul-link ${isActive ? "active" : ''}`}
                     to={`pricing`}
                  >
                     Pricing</NavLink>
               </li>

               <li className="host-detail__li">
                  <NavLink
                     className={({ isActive }) => `host-detail__ul-link ${isActive ? "active" : ''}`}
                     to={`photos`}
                  >
                     Photos</NavLink>
               </li>
            </ul>

            <Outlet />
         </div>
      )
   })


   return (
      <section className="host-detail">
         <Link to="/host/vans">
            <button className='host-detail__btn'>
               <img src={arrow} alt="Image of an arrow pointing left" />
               Back to all vans
            </button>
         </Link>

         {hostVans.length > 0 ?
            hostVans
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
