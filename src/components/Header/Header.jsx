import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

import './headerStyle.scss';


export default function Header() {

   return (
      <header className="header">
         <div className="header__wrapper">
            <h1 className="header__title">
               <Link to="/">
                  <img src={logo} alt="Logo written '#VANLIFE'" />
               </Link>
            </h1>

            <nav>
               <ul className="header__list">
                  <li>
                     <NavLink
                        to="/host"
                        className={({ isActive }) => `header__link ${isActive ? "active-link" : null}`}
                     >
                        Host
                     </NavLink>
                  </li>

                  <li>
                     <NavLink
                        to="/about"
                        className={({isActive}) => `header__link ${isActive ? "active-link" : null}`}
                     >
                        About
                     </NavLink>
                  </li>

                  <li>
                     <NavLink
                        to="/vans"
                        className={({isActive}) => `header__link ${isActive ? "active-link" : null}`}
                     >
                        Vans
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   )
}
