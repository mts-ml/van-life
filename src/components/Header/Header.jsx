import { Link } from 'react-router-dom';
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
                     <Link to="/about" className='header__link'>About</Link>
                  </li>

                  <li>
                     <Link to="/vans" className='header__link'>Vans</Link>
                  </li>
               </ul>
            </nav>
         </div>
      </header >
   )
}
