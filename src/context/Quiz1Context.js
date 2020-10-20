import React, { useState, createContext, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import uuid from "uuid";
import { GameModeContext } from "../context/GameModeContext";

//generates random quiz question every 8 seconds
var quizOnes = require("../data/quiz1.json");
var qLength = quizOnes.length;
//console.log(quizOnes[0]["optione"])
export const Quiz1Context = createContext();

export const Quiz1Provider = (props) => {
  //var history = useHistory();

  const [qText, setQuestion] = useState("");
  const [dashNo, setDashNo] = useState(0);
  const [dashCategory, setDashCategory] = useState("");
  const [quiz1Over, setQuiz1Over] = useState(false);
  const [colorCorrect, setColorCorrect] = useState(false);
  const [gameMode, setGameMode] = useContext(GameModeContext);
  const [optioni, setOptions] = useState([
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
  ]);

  //const [optioni, setOptions] = useState([]);

  /* 
  function historyChange(){

    setTimeout(() => {
      history.push(`/triviaQuiz2`)
    }, 2500);
   
  } */

  //we need something to map our array of object that
  var interval1 = 1000;
  var interval2 = 1000;
  var counter1 = 0;

  //deplay our array iteration

  function slowIterateQuestions(arr) {
    setColorCorrect(false);
    if (arr.length === 0) {
      setQuiz1Over(true);
      setGameMode(2);

      window.history.replaceState(null, "New Page Title", "/triviaQuiz2");
     // window.location.reload()

      console.log(`Game Mode is : ${gameMode}`);
      return;
    }
    //console.log(arr[0]);
    // <-- replace with your custom code
    counter1++;
    setDashNo(qLength - counter1);
    setDashCategory(arr[0].category);
    setQuestion(arr[0].question);
    setOptions(() => [...arr[0].optione]);

    setTimeout(() => {
      slowIterateQuestions(arr.slice(1));
    }, interval1);
  }

  function slowIterateAnswers(arr) {
    if (arr.length === 0) {
      return;
    }

    setColorCorrect(true);
    setTimeout(() => {
      slowIterateAnswers(arr.slice(1));
    }, interval2);
  }

  useEffect(() => {
    slowIterateQuestions(quizOnes);
  }, []);

  useEffect(() => {
    slowIterateAnswers(quizOnes);
  }, []);

  /*  useEffect(() => {
    setTimeout(() => {
      history.push(`/triviaQuiz2`)
    }, 2500);
  }, [quiz1Over]);

 */

  return (
    <Quiz1Context.Provider
      value={{
        question: [qText, setQuestion],
        dNumber: [dashNo, setDashNo],
        dCategory: [dashCategory, setDashCategory],
        quiz1State: [quiz1Over, setQuiz1Over],
        colorize: [colorCorrect, setColorCorrect],
        options: [optioni, setOptions],
      }}
    >
      {props.children}
    </Quiz1Context.Provider>
  );
};
