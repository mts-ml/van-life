import {useLocation} from 'react-router-dom';

import './footerStyle.scss';


export default function Footer() {
   const location = useLocation();

   const isHostVansPage = location.pathname === '/host/vans';


   return (
      <footer className={`footer ${isHostVansPage ? 'fixed-footer' : ''}`}>
         <h3 className='footer__title'>Ⓒ 2022 #VANLIFE</h3>
      </footer>
   )
}
