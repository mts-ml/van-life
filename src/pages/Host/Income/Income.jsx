import table from '../../../assets/images/table.png'

import './incomeStyle.scss'


export default function Income() {
   return (
      <section className="income">
         <h3 className='income__title'>Income</h3>

         <p className="income__time">
            Last <span>30 days</span>
         </p>

         <p className="income__money">$2.260</p>

         <img className='income__img' src={table} alt="Image of a table from July - December and prices 0 - 5k dollars." />

         <div className="income__transactions-div">

            <p className="income__transactions">Your transactions (3)</p>

            <p className="income__time">
               Last <span>30 days</span>
            </p>
         </div>

         <div className="income__period">
            <p className="income__period-money">$720</p>

            <p className="income__period-time">1/12/22</p>
         </div>

         <div className="income__period">
            <p className="income__period-money">$560</p>

            <p className="income__period-time">10/11/22</p>
         </div>

         <div className="income__period">
            <p className="income__period-money">$980</p>

            <p className="income__period-time">23/11/22</p>
         </div>

      </section>
   )
}
