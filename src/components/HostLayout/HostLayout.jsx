import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

import './hostLayoutStyle.scss';


export default function Host() {
   const location = useLocation();

   return (
      <>
         <nav>
            {/* Wanted to keep both methods, with {isActive} and aria-current and Link/NavLink. */}
            <ul className="host__list">
               <li className="host__li">
                  <NavLink
                     className={({isActive}) => `host__link ${isActive ? "active" : ""}`}
                     end
                     to="" // IT'S INDEX
                  >
                     Dashboard
                  </NavLink>
               </li>

               <li className="host__li">
                  <Link
                     className="host__link"
                     to="income"
                     aria-current={location.pathname === "/host/income" ? "page" : undefined}>Income
                  </Link>
               </li>

               <li className="host__li">
                  {/* Need to be NavLink in order for 'end' to work. */}
                  <NavLink
                     className="host__link"
                     to="vans"
                     end={false}
                     aria-current={location.pathname === "/host/vans" ? "page" : undefined}>Vans
                  </NavLink>
               </li>

               <li className="host__li">
                  <Link
                     className="host__link"
                     to="reviews"
                     aria-current={location.pathname === "/host/reviews" ? "page" : undefined}>Reviews
                  </Link>
               </li>
            </ul>
         </nav>

         <Outlet />
      </>
   )
}
