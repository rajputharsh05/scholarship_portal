import React from "react";
import "./Card.css";
export default function Card(props) {


  const tnt = props.website.split('.');
  console.log(tnt[1]);

  return (
    <>
      <div className="cardList" >
        <div className="cardCard">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA150APOf6aWVBOpHdarTvW6sHHVvgtEfqel7L19Xwnq5bM7Gd8EEGllr0bPV33jL__7c&usqp=CAU" alt="image" className="cardImage" />
            <div className='card_content'>
                <h3 className="cardName">Platform: {tnt[1]}</h3>
    
            </div>
            <div className="card_ul">
                <ul>
                    <li>Name : {props.name}</li>
                    <li>amount : {props.amount}</li>
                    <li>eligibility : {props.eligibility}</li>
                    <li>deadline : {props.deadline}</li>
                    <p>{props.description}</p>
                </ul>
                <a href={props.website}>Visit</a>
            </div>
              
        </div>
      </div>
    </>
  );
}
