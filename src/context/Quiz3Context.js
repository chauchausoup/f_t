import React, { useState, createContext, useEffect, useContext } from "react";

import uuid from "uuid";
import { GameModeContext } from "../context/GameModeContext";

//generates random quiz question every 8 seconds
import { data3 } from "../data/quiz3";
//import {o3} from '../data/options3'

console.log(data3);

var qLength = data3.length;
console.log(qLength);

export const Quiz3Context = createContext();

export const Quiz3Provider = (props) => {
  const [qText3, setQuestion3] = useState("");
  const [dashNo3, setDashNo3] = useState(0);
  const [dashCategory3, setDashCategory3] = useState("");
  const [colorCorrect3, setColorCorrect3] = useState(false);
  const [gameMode, setGameMode] = useContext(GameModeContext);
  const [optioni3, setOptions3] = useState([
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    
  ]);
  const [go3,setGo3]=useState(true)

  //we need something to map our array of object that
  var interval1 = 5000;
  var counter1 = 0;

  //deplay our array iteration

  function slowIterateQuestions(arr) {
    setColorCorrect3(false);
    if (arr.length === 0) {
      setGameMode("4");
      setGo3(false)
      return;
    }

    counter1++;
    setDashNo3(qLength - counter1);
    setDashCategory3(arr[0].category);
    setQuestion3(arr[0].question);
    setOptions3(() => [...arr[0].optione]);

    setTimeout(() => {
      slowIterateQuestions(arr.slice(1));
    }, interval1);
  }

 useEffect(() => {
      if(gameMode== "3" && go3){
        slowIterateQuestions(data3);
      }
    }, [gameMode]); 

  return (
    <Quiz3Context.Provider
      value={{
        question3: [qText3, setQuestion3],
        dNumber3: [dashNo3, setDashNo3],
        dCategory3: [dashCategory3, setDashCategory3],
        colorize3: [colorCorrect3, setColorCorrect3],
        options3:[optioni3,setOptions3]
      }}
    >
      {props.children}
    </Quiz3Context.Provider>
  );
};
