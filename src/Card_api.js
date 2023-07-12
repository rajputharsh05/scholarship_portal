import React from "react";
import Card from "./Card";
import "./Card.css";
import data from "./backend/info";
export default function Card_api(){
    

    console.log(data)
    const arr = data.scholarships
    
    return(
        <>
        <div className="parent">
         {arr.map((item,idx)=>
         (
            <Card
            key={idx}
            name={item.name}
            amount={item.amount}
            eligibility={item.eligibility}
            deadline={item.deadline}
            website={item.website}
            description={item.description}
            />
         ))}
         </div>
     </>
    )
}