import React,{useState,useEffect} from "react"
import "./Stores.css"
import locations from "../data"

function Stores(){

    const [items,setItems]=useState([])
    const [text,setText]=useState("Show More")
    const [set,setSet]=useState(true)
    
    
    useEffect(()=>{
        setItems(locations.slice(0,6))
    },[])
     
    function showmore(){
        setItems(locations)
        setText("Show Less")
        setSet(false)
    }

    function showless(){
        setItems(locations.slice(0,6))
        setText("Show More")
        setSet(true)
    }
    return(<div className="stores">
    <p className="stores-head">Browse stores in San Francisco Bay Area</p>
    <div className="stores-browse">
    {items.map((item)=>{
        return(
            <div className="item">
            <div>
                <img src={item.img} />
            </div>
            <div className="item-text">
            <h3>{item.name}</h3>
            <p>{item.type}</p>
            </div>
            </div>
        )
    })}
    

    </div>
    
    <div className="stores-button">
    <button onClick={set ? showmore : showless} >{text}</button>
    </div>

   
    </div>)
}



export default Stores