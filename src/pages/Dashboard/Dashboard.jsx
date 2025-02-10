import star from '../../assets/images/star.png'
import van1 from '../../assets/images/van1.png'
import van2 from '../../assets/images/van2.png'
import van3 from '../../assets/images/van3.png'

import './dashboardStyle.scss'


export default function Dashboard() {
   return (
      <section className="dashboard">
         <div className="dashboard__welcome">
            <h2 className="dashboard__title">Welcome!</h2>

            <div className="dashboard__div">
               <div className="dashboard__income">
                  <p className="dashboard__income">Income last</p>
                  <span className="dashboard__span">30 days</span>
               </div>

               <p className="dashboard__details">Details</p>
            </div>

            <p className="dashboard__price">$2,260</p>
         </div>

         <div className="dashboard__review">
            <div className="dashboard__score">
               <p className="dashboard__score-info">Review score</p>

               <span className="dashboard__points">
                  <img src={star} width={20} alt="Icon of a star in orange" />
                  <strong> 5.0</strong>/5
               </span>
            </div>

            <p className="dashboard__details">Details</p>
         </div>

         <div className="listed-vans">
            <div className="listed-vans__info">
               <h3 className="listed-vans__title">Your listed vans</h3>

               <p className="dashboard__details">View All</p>
            </div>

            {/* FIRST VAN */}
            <div className="listed-vans__van">
               <div className="listed-vans__model">
                  <img src={van1} alt="Picture of a yellow van" />


                  <div className="listed-vans__type">
                     <h3 className="listed-vans__name">Modest Explorer</h3>

                     <span className="listed-vans__price">$60/day</span>
                  </div>
               </div>

               <p className="dashboard__details">Edit</p>
            </div>

            {/* SECOND VAN */}
            <div className="listed-vans__van">
               <div className="listed-vans__model">
                  <img src={van2} alt="Picture of a yellow van" />


                  <div className="listed-vans__type">
                     <h3 className="listed-vans__name">Beach Bum</h3>

                     <span className="listed-vans__price">$80/day</span>
                  </div>
               </div>

               <p className="dashboard__details">Edit</p>
            </div>

            {/* THIRD VAN */}
            <div className="listed-vans__van">
               <div className="listed-vans__model">
                  <img src={van3} alt="Picture of a yellow van" />


                  <div className="listed-vans__type">
                     <h3 className="listed-vans__name">Green Wonder</h3>

                     <span className="listed-vans__price">$70/day</span>
                  </div>
               </div>

               <p className="dashboard__details">Edit</p>
            </div>
         </div>
      </section>
   )
}
