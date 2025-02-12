import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './footerStyle.scss';


export default function Footer() {

   const location = useLocation();
   
   const [isScrollable, setIsScrollable] = useState(false);

   useEffect(() => {
      const checkScrollable = () => {
         setIsScrollable(document.documentElement.scrollHeight > window.innerHeight);
      };

      // Verifies everytime the page renders
      checkScrollable();

      // Uses ResizeObserver to detect changed on the content para detectar mudanças na altura do conteúdo
      const observer = new ResizeObserver(checkScrollable);
      observer.observe(document.body);

      window.addEventListener('resize', checkScrollable);

      return () => {
         window.removeEventListener('resize', checkScrollable);
         observer.disconnect();
      };
   }, [location.pathname]);



   return (
      <footer className={`footer ${isScrollable ? '' : 'fixed-footer'}`}>
         <h3 className='footer__title'>Ⓒ 2022 #VANLIFE</h3>
      </footer>
   );
}
