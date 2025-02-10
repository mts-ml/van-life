import { Link, Outlet, useLocation } from 'react-router-dom';

import './hostLayoutStyle.scss';


export default function Host() {
   const location = useLocation();

   return (
      <>
         <nav>
            <ul className="host__list">
               <li className="host__li">
                  <Link
                     className="host__link"
                     to=""
                     aria-current={location.pathname === "/host" ? "page" : undefined}>Dashboard
                  </Link>
               </li>

               <li className="host__li">
                  <Link
                     className="host__link"
                     to="/host/income"
                     aria-current={location.pathname === "/host/income" ? "page" : undefined}>Income
                  </Link>
               </li>

               <li className="host__li">
                  <Link
                     className="host__link"
                     to="/host/vans"
                     aria-current={location.pathname === "/host/vans" ? "page" : undefined}>Vans
                  </Link>
               </li>

               <li className="host__li">
                  <Link
                     className="host__link"
                     to="/host/reviews"
                     aria-current={location.pathname === "/host/reviews" ? "page" : undefined}>Reviews
                  </Link>
               </li>
            </ul>
         </nav>

         <Outlet />
      </>
   )
}
