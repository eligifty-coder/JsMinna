import React, {useState, useEffect} from 'react'
import { NavLink, useHistory, withRouter} from 'react-router-dom'
import './InputForm.css'
const InputForm = ()=>{
   const [inputVal, setInputVal] = useState("")
   const [submitVal, setSubmitVal] = useState("")
   const history = useHistory()
   const changeHandler = (e) => {
      setInputVal(e.target.value)
      localStorage.setItem("userEmail", e.target.value)
      setSubmitVal(inputVal)
   }
   useEffect(() => {
      setSubmitVal(inputVal)
   }, [])
   const submitHandler = (e) => {
      e.preventDefault()
      setSubmitVal(inputVal)
      if(inputVal){
         history.push('/signup')
      }
   }

      return(
         <form className="form" onSubmit={submitHandler}>
            <div className="formdiv">
               <div className="homeInput">
                  <input type="email" placeholder="enter your email" onChange={changeHandler} />
               </div>
               <div className="homeBtn">
                  <button type="button">Submit</button>
               </div>
            </div>
         </form>
      )}
export default (InputForm)