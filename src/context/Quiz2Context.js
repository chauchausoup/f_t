import React, { useState, createContext,useEffect, useContext } from "react";

import uuid from "uuid";
import {GameModeContext} from '../context/GameModeContext';

//generates random quiz question every 8 seconds
import {data2} from '../data/quiz2'
import {o2} from '../data/options2'

console.log(data2);

var qLength = data2.length;
console.log(qLength)

export const Quiz2Context = createContext();

export const Quiz2Provider = (props) => {
  const [qText2, setQuestion2] = useState("");
  const [dashNo2, setDashNo2] = useState(0);
  const [dashCategory2, setDashCategory2] = useState("");
  const [colorCorrect2,setColorCorrect2]=useState(false);
  const [gameMode,setGameMode]=useContext(GameModeContext)
  //const [optioni, setOptions] = useState([]);

  //we need something to map our array of object that
  var interval1 = 5000; 
  var interval2=5000;
    var counter1=0;

  //deplay our array iteration

  function slowIterateQuestions(arr) {
    setColorCorrect2(false)
    if (arr.length === 0) {
      setGameMode(3)
      return;
    }
     // <-- replace with your custom code 
     counter1++
    setDashNo2(qLength-counter1)
    setDashCategory2(arr[0].category)
    setQuestion2(arr[0].question)
    

    
    setTimeout(() => {
        
      slowIterateQuestions(arr.slice(1));
    }, interval1); 
  }



  function slowIterateAnswers(arr){
    if(arr.length === 0){
      return;
    }
    setColorCorrect2(true)
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
        question2: [qText2, setQuestion2],
        dNumber2: [dashNo2, setDashNo2],
        dCategory2: [dashCategory2, setDashCategory2],
        colorize2:[colorCorrect2,setColorCorrect2]
        
      }}
    >
      {props.children}
    </Quiz2Context.Provider>
  );
};
