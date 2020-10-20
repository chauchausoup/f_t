import React, { useState, createContext, useEffect, useContext } from "react";

import uuid from "uuid";
import { GameModeContext } from "../context/GameModeContext";

//generates random quiz question every 8 seconds
import { data2 } from "../data/quiz2";
//import {o2} from '../data/options2'

console.log(data2);

var qLength = data2.length;
console.log(qLength);

export const Quiz2Context = createContext();

export const Quiz2Provider = (props) => {
  const [qText2, setQuestion2] = useState("");
  const [dashNo2, setDashNo2] = useState(0);
  const [dashCategory2, setDashCategory2] = useState("");
  const [colorCorrect2, setColorCorrect2] = useState(false);
  const [gameMode, setGameMode] = useContext(GameModeContext);
  const [optioni2, setOptions2] = useState([
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
  ]);
  const [go2,setGo2]=useState(true)

  //we need something to map our array of object that
  var interval1 = 2000;
  var counter1 = 0;

  //deplay our array iteration

  function slowIterateQuestions(arr) {
    setColorCorrect2(false);
    if (arr.length === 0) {
      setGameMode("3");
      setGo2(false)
      return;
    }

    counter1++;
    setDashNo2(qLength - counter1);
    setDashCategory2(arr[0].category);
    setQuestion2(arr[0].question);
    setOptions2(() => [...arr[0].optione]);

    setTimeout(() => {
      slowIterateQuestions(arr.slice(1));
    }, interval1);
  }

 useEffect(() => {
  console.log("is it initial?")

      if((gameMode === "2") && go2){

        slowIterateQuestions(data2);
      }
      return;
    }, []); 

  return (
    <Quiz2Context.Provider
      value={{
        question2: [qText2, setQuestion2],
        dNumber2: [dashNo2, setDashNo2],
        dCategory2: [dashCategory2, setDashCategory2],
        colorize2: [colorCorrect2, setColorCorrect2],
        options2:[optioni2,setOptions2],
        go2Flag:[go2,setGo2]
      }}
    >
      {props.children}
    </Quiz2Context.Provider>
  );
};
