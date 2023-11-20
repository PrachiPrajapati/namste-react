import React ,{ useState } from 'react';
import logo from '../images/logo.png';
import {CART_ICON_URL} from '../utils/constants';
const Header = () => {
    const [btnName,setBtnName] = useState("login");
    return(
       <>
        <div className="header-bar">
            <div className="logo-box">
                <a href="#"><img src={logo} alt="logo" /></a>
            </div>
            <div className="navbar">
                <ul>
                    <li className="nav-items">Home</li>
                    <li className="nav-items">About</li>
                    <li className="nav-items">Account</li>
                    <li className="nav-items cart"><img src={CART_ICON_URL} alt="cart" /><span>0</span></li>
                    <button className="filter-btn" onClick={(()=> {btnName=='login' ? setBtnName("Logout") : setBtnName("login")})}>{btnName}</button>
                </ul>
            </div>
        </div>
       </>
    );
}
export default Header