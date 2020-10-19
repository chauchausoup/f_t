import React, { useState, createContext,useEffect } from "react";

import uuid from "uuid";
import {GameModeContext} from '../context/GameModeContext';

//generates random quiz question every 8 seconds
import {data2} from '../data/quiz2'
console.log(data2);

var qLength = data2.length;

export const Quiz2Context = createContext();

export const Quiz2Provider = (props) => {
  const [qText, setQuestion] = useState("");
  const [dashNo, setDashNo] = useState(0);
  const [dashCategory, setDashCategory] = useState("");
  const [quiz2Over,setQuiz2Over]=useState(false)
  const [colorCorrect,setColorCorrect]=useState(false);
  const [gameMode,setGameMode]=useState(GameModeContext)
  const [optioni, setOptions] = useState([]);

  //we need something to map our array of object that
  var interval1 = 5000; 
  var interval2=5000;
    var counter1=0;

  //deplay our array iteration

  function slowIterateQuestions(arr) {
    setColorCorrect(false)
    if (arr.length === 0) {
      setQuiz2Over(true);
      setGameMode(3)
      return;
    }
     // <-- replace with your custom code 
     counter1++
    setDashNo(qLength-counter1)
    setDashCategory(arr[0].category)
    setQuestion(arr[0].question)
    setOptions((p)=>{
        return {...p,...arr[0].optione}
    })

    
    setTimeout(() => {
        console.log(optioni)
      slowIterateQuestions(arr.slice(1));
    }, interval1); 
  }



  function slowIterateAnswers(arr){
    if(arr.length === 0){
      return;
    }
    setColorCorrect(true)
    setTimeout(() => {
      slowIterateAnswers(arr.slice(1));
    }, interval2); 

  }

  useEffect(()=>{ 
    slowIterateQuestions(data2)
    
  },[])
  useEffect(()=>{ 
    slowIterateAnswers(data2)
    
  },[])
  

  return (
    <Quiz2Context.Provider
      value={{
        question: [qText, setQuestion],
        dNumber: [dashNo, setDashNo],
        dCategory: [dashCategory, setDashCategory],
        quiz2State:[quiz2Over,setQuiz2Over],
        colorize:[colorCorrect,setColorCorrect]
        
      }}
    >
      {props.children}
    </Quiz2Context.Provider>
  );
};
