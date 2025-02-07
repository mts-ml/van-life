import { Link } from 'react-router-dom';

import './homeStyle.scss';


export default function Home() {
   return (
      <main className='main'>
         <h2 className="main__title">
            You got the travel plans, we got the travel vans.
         </h2>

         <p className="main__description">
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
         </p>

         <Link to="/vans" className="main__link">
            <button className="main__btn">Find your van</button>
         </Link>
      </main>
   )
}
