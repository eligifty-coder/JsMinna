import React, {Component} from 'react'
import './Home.css'
import Timer from './Timer/Timer'
import InputForm from './InputForm/InputForm'
import Social from './Social/Social'
class Home extends Component{
   
   render(){
      
      return(
         <section className="home">
            <div className="content-sec">
               <div className="logo">
                  <h1>JSMINNA</h1>
               <div className="dots">
                     <div className="dot"></div>
                     <div className="dot"></div>
                     <div className="dot"></div>
                  </div>
               </div>
               <div className="title">
                  <h1>Something Awesome Is In The Work</h1>
                  <h5>We'll be up and running with our new online store really soon. kindly singup to drop your product suggestions in the following catergories (electronics, furniture and grocery)</h5>
               </div>
               <div>
                  <Timer/>
               </div>
               <div>
                  <InputForm />
               </div>
               <div>
                  <Social />
               </div>
            </div>
         </section>
      )
   }
}
export default Home