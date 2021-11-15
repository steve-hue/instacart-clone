import React from "react"
import "./Groceries.css"
import grocery from "../grocery"

function Groceries(){
    return(<div className="groceries">
    <p className="groceries-head">Grocery delivery you can count on</p>
    <div className="groceries-info">
        {grocery.map((item)=>{
            return(
                <div className="block">
                <div className="block-text">
                <div>
                    <h1>{item.heading}</h1>
                    </div>
                <div>
                    <p>{item.text}</p>
                </div>
                </div>
               
                <img src={item.img} />
            
                </div>
            )
        })}
    </div>
    <div className="groceries-button">
        <button>Start Shopping</button>
        
    </div>
    </div>)
}

export  default Groceries