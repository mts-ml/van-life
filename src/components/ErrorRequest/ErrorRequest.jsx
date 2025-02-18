import { useRouteError } from 'react-router-dom';

import './errorRequestStyle.scss';


export default function ErrorRequest() {
   const error = useRouteError();


   return (
      <section className="error-request">
         <h3 className='error-request__title'><span>Message</span>: {error.message}</h3>
         <p className='error-request__description'><span>Status text</span>: {error.statusText}</p>
         <p className='error-request__description'><span>Status</span>: {error.status}</p>
      </section>
   )
}
