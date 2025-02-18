import { Link } from 'react-router-dom';

import './errorPageStyle.scss';


export default function ErrorPage() {
   return (
      <section className="error">
            <h3 className='error__title'>Sorry, the page you were looking for was not found.</h3>

            <Link className="error__btn" to="/">Return to home</Link>
      </section>
   )
}
