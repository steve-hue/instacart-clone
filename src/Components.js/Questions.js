import React,{useState} from "react"
import "./Questions.css"
import question from "../question"
import {BsPlus, BsPlusLg} from "react-icons/bs"
import { GiConsoleController } from "react-icons/gi"
import {FiMinus} from "react-icons/fi"
function Questions(){

    const [vie,setView]=useState([])


    function response(id){
        
    
       
        if(vie.find((it)=>it===id)){
            setView(vie.filter((item)=>item!==id))

        }else{
        setView([...vie,id])}
        console.log(vie)

    }

  
        
    function answer(item){
     
        return(
            <div className="show-answers">
                <p>{item.a}</p>
            </div>
        )
    }
    

    return(<div classsName="questions">
    <p className="questions-head">Common questions</p>
    <div className="questions-info">
    {question.map((item)=>{
        return(
            <div className="qna">
            <button className="question-set" onClick={()=>response(item.id)}>
            <div>
                <p className="p">{item.q}</p>
            </div>
            <div>{vie.find((it)=>it===item.id) ?<FiMinus size={20} /> : <BsPlusLg  size={20} /> }</div>
            </button>
            {vie.find((it)=>it===item.id) ? answer(item) : null }
            </div>
        )
    })}

    </div>
    </div>)
}



export default Questions