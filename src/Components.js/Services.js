import React from "react"
import "./Services.css"
import service from "../service"

function Services(){
    return(<div className="Services">
    <p className="services-head">The world's largest online grocery service</p>
    <div className="services-info">
        <div className="services-image">
          
        </div>
        <div className="services-details">
            {service.map((item)=>{
                return(
                    <div className="service-blocks">
                    <div><h1>{item.heading}</h1>
                    </div>
                    <div><p>{item.sub}</p></div></div>
                  
                )
            })}
        </div>
    </div>

    </div>)

}

export default Services