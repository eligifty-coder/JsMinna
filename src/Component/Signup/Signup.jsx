import React, {Component} from 'react'
import './Signup.css'
import {NavLink,} from 'react-router-dom'
import { render } from 'react-dom'
class Signup extends Component{
   state={
      user:{
         "fullname": "",
         "email": "",
         "phone": "",
         "address": "",
         "gender": "",
         "mySecretWord": "",
      }
   }
   uid = localStorage.getItem('userEmail')
   componentDidMount(){
      if(this.uid){
         this.setState({
            user:{
            ...this.state.user,
            email:this.uid,
      }
         })
      }
   }


   onchangeHandler =  (e)=>{
        const { name,value } = e.currentTarget
        switch (name) {
           case 'fname':
               this.setState((prevState, prevProp)=>{
                 return {
                    user: {
                       ...prevState.user,
                       fullname:value
                    }
                 }
               },
               ()=>{
                  // console.log(this.state.user)
               }
               )
              break;
           case 'email':
              this.setState((prevState, prevProp) => {
                 return {
                    user: {
                       ...prevState.user,
                       email: value
                    }
                 }
              },
                 () => {
                  //   console.log(this.state.user)
                 }
              )
              break;
           case 'phone':
              this.setState((prevState, prevProp) => {
                 return {
                    user: {
                       ...prevState.user,
                       phone: value
                    }
                 }
              },
                 () => {
                  //   console.log(this.state.user)
                 }
              )
              break;
           case 'pword':
              this.setState((prevState, prevProp) => {
                 return {
                    user: {
                       ...prevState.user,
                       mySecretWord: value
                    }
                 }
              },
                 () => {
                     //  console.log(this.state.user)
                 }
              )
              break;
           case 'address':
              this.setState((prevState, prevProp) => {
                 return {
                    user: {
                       ...prevState.user,
                       address: value
                    }
                 }
              },
                 () => {
                    //   console.log(this.state.user)
                 }
              )
              break;
           case 'gender':
              console.log(value)
              this.setState((prevState, prevProp) => {
                 return {
                    user: {
                       ...prevState.user,
                     gender: value
                    }
                 }
              },
                 () => {
                     //  console.log(this.state.user)
                 }
              )
              break;
           default:
              ''
        }

   }
   submitHandler= async(e)=>{
      e.preventDefault()
      try {
         let api_body = {...this.state.user}
         console.log(api_body)
         const data= await fetch("https://jsminnastore.herokuapp.com/auth/signup",
            {
               method: "POST",
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(api_body),
            },
         )
         const jsonData = await data.json()
         console.log(jsonData)
      } catch (e) {
         console.log(e)
       }
   }
   render(){
      const { fullname, email, phone, address, mySecretWord, gender,}= this.state.user
   return (
      <div className="outer">
         <div className="signup">
            <header>
               <h1>JsMinna</h1>
               <div className="link"><NavLink to="/signup" className="anchor">Sign in</NavLink></div>
            </header>
            <form>
               <div className="title">
                  <h1>Create a new account</h1>
                  <p>It's quick and easy</p>
               </div>
               <div className="inputs">
                  <input
                     type="text"
                     className="inputdiv"
                     placeholder="Full name"
                     name="fname"
                     onChange={this.onchangeHandler}
                     defaultValue={fullname}
                  />
                  
                  <input
                     type="email"
                     className="inputdiv"
                     name="email"
                     placeholder="Email"
                     onChange={this.onchangeHandler}
                     defaultValue={email}
                  />
                  <input
                     type="password"
                     className="inputdiv"
                     placeholder="Password"
                     name="pword"
                     onChange={this.onchangeHandler}
                     defaultValue={mySecretWord}
                  />
                  <input
                     type="tel"
                     className="inputdiv"
                     name="phone"
                     placeholder="phone number"
                     defaultValue={phone}
                     onChange={this.onchangeHandler}
                  />
                  {/* <input
                     type="password"
                     className="inputdiv"
                     name="pwords"
                     placeholder="password"
                     defaultValue={mySecretWord}
                  /> */}
                 
                  <input
                     type="text"
                     className="inputdiv"
                     name="address"
                     placeholder="Address"
                     defaultValue={address}
                     onChange={this.onchangeHandler}
                  />
                  <div className="gender-sec">
                     <label className="label">Gender</label>
                     <div className="genders">
                        <div className="gender">
                           <input
                              type="radio"
                              name="gender"
                              defaultValue="Female"
                              onChange={this.onchangeHandler}
                              // checked={this.state.gender === {gender}}
                           />
                           <h5>Female</h5>
                        </div>
                        <div className="gender">
                           <input type="radio" name="gender" 
                           defaultValue="Male"
                           onChange={this.onchangeHandler}
                           // checked={this.state.gender==={gender}}
                           />
                           <h5>Male</h5>
                        </div>
                     </div>
                  </div>
                  <p> By clicking Sign Up, you agree to our <span>Terms, Data Policy</span> and <span>Cookie Policy</span>. You may recieve SMS notifications from us and can opt out any time</p>
                  <div className="btn">
                     <button type="button" onClick={this.submitHandler}>Sign Up</button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
   }
}

export default Signup
