import React , {Component} from 'react'
import './Social.css'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram} from 'react-icons/fa'
class Social extends Component{
   render(){
      return(
         <div className="socials">
            <div className="social">
               <a href=""><FaFacebookF/></a>
               <a href=""><FaLinkedinIn/></a>
               <a href=""><FaTwitter/></a>
               <a href=""><FaInstagram/></a>
            </div>
            <div>
           <p>Copyright{new Date().getFullYear()} | All Rights Reserved. <span>Eligifty-coder</span></p>
            </div>
         </div>
      )
   }
}
export default Social