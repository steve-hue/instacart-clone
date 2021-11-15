import React from "react"
import "./Header.css"


function Header(){
    return(<div className="header">
    <div className="country">
       
            <select>
                <option>US</option>
                <option>CA</option>
            </select>
      
    </div>
    <div className="header-content">
        <div className="head-text"><h3>
            Order groceries for delivery or pickup today
        </h3></div>
    
    <div className="head-mid">
        <p>Whatever you want from local stores,brought right to your door.</p>
    </div>
    <div className="head-stores">
        <div className="input-stores"><input type="text" placeholder="Enter your address"></input></div>
        <div className="button-stores"><button>Find stores near me</button></div>
    </div>
</div>

    </div>)
}


export default Header