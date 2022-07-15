import { Link } from "react-router-dom";
import logo from '../../images/logo-viptech.png'
import './Header.css'

export function Header ()  {
    return (     
        <div className='Header'>
            <Link to = "/">
               <img src={logo} alt="logo"/> 
            </Link>
        </div>
    )
    
    
}