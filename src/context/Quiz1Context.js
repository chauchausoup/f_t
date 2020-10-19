import React, { useState, createContext,useEffect } from "react";

import uuid from "uuid";

//generates random quiz question every 8 seconds
var quizOnes = require("../data/quiz1.json");
// console.log(typeof quizOnes)
/* var op=[{
    "val":"Nepal3",
    "isCorrect":true
},
{
    "val":"India3",
    "isCorrect":false
},
{
    "val":"China3",
    "isCorrect":false
},
{
    "val":"Philipines3",
    "isCorrect":false
}
] */

//console.log(op[0]["val"])
var qLength = quizOnes.length;

export const Quiz1Context = createContext();

export const Quiz1Provider = (props) => {
  const [qText, setQuestion] = useState("");
  const [dashNo, setDashNo] = useState(0);
  const [dashCategory, setDashCategory] = useState("");
  const [optioni, setOptions] = useState([]);

  //we need something to map our array of object that
  var interval = 4000; 
    var counter=0;

  //deplay our array iteration

  function slowIterate(arr) {
    if (arr.length === 0) {
      return;
    }
    //console.log(arr[0]);
     // <-- replace with your custom code 
     counter++
    setDashNo(qLength-counter)
    setDashCategory(arr[0].category)
    setOptions([{
      "val":"Nepal3",
      "isCorrect":true
  },
  {
      "val":"India3",
      "isCorrect":false
  },
  {
      "val":"China3",
      "isCorrect":false
  },
  {
      "val":"Philipines3",
      "isCorrect":false
  }
  ])
    setQuestion(arr[0].question)

    
    setTimeout(() => {
      slowIterate(arr.slice(1));
    }, interval); // <-- replace with your desired delay (in milliseconds) 
  }

  useEffect(()=>{
    slowIterate(quizOnes)
  },[])
  

  return (
    <Quiz1Context.Provider
      value={{
        question: [qText, setQuestion],
        dNumber: [dashNo, setDashNo],
        dCategory: [dashCategory, setDashCategory],
        optionArray: [optioni, setOptions],
      }}
    >
      {props.children}
    </Quiz1Context.Provider>
  );
};
