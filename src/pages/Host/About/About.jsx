import img from '../../../assets/images/bg-about.png'
import './aboutStyle.scss'


export default function About() {
   return (
      <section className="about">
         <img className='about__img' src={img} alt="Image of a man sitting on top of a van looking at the night sky." />

         <div className="about__wrapper">
            <h2 className="about__title">
               Don’t squeeze in a sedan when you could relax in a van.
            </h2>

            <p className="about__description">
               Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
               (Hitch costs extra 😉)
            </p>

            <p className="about__description2">
               Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>

            <div className="about__destination">
               <p className="about__explore">
                  Your destination is waiting.
               </p>

               <p className="about__explore">
                  Your van is ready.
               </p>

               <button className="about__btn">Explore our vans</button>
            </div>
         </div>
      </section>
   )
}
