import React, {Component} from 'react'
import './Timer.css'
class Timer extends Component {
   state={
      timer:{
         days: 0,
         hours: 0,
         minutes: 0,
         seconds: 0,
      }
   }
   timerInterval=()=>{
      const currentDate = new Date().getTime()
      const startDate= new Date("Dec, 18,2021").getTime()
      const endTime = startDate- currentDate
      const seconds= Math.floor((endTime/1000)%60)
      const minutes= Math.floor((endTime/(1000*60))%60)
      const hours = Math.floor((endTime/(1000*60*60))%24)
      const days= Math.floor((endTime/(1000*60*60*24)))
      const timer={
         days,
         hours,
         minutes,
         seconds,
      }
      this.setState({timer:timer})
      this.interval=setTimeout(this.timerInterval, 1000)
   }
   componentDidMount(){
      this.timerInterval()
   }
   componentWillUnmount(){
      clearInterval(this.interval)
   }
   render(){
      const timeArray = Array.from(Object.values(this.state.timer))
      const timeDiv = timeArray.map((item,index)=>{
         let timeContent
         switch(index){
            case 0 :
               timeContent=(
                  <h1 className="item first"><span> days</span> {item}</h1>
               )
               break;
               case 1:
               timeContent = (
                  <h1 className="item second"> <span>hours</span> {item}</h1>
               )
               break;
               case 2:
               timeContent = (
                  <h1 className="item third"> <span>Minutes</span> {item}</h1>
               ) 
               break;
               case 3:
               timeContent = (
                  <h1 className="item fourth"><span> Seconds</span> {item}</h1>
               )

         }
         return(
         <div key={index} className="time">{timeContent}</div>
         )
      })
      return(
         <div className="timecontainer">
            {timeDiv}
         </div>
      )
   }
}
export default Timer