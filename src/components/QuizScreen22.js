import React, { useContext, useState, useEffect } from "react";
import Dashboard2 from "./dashboard2";
import Questions2 from "./questions2";
import Options2 from "./options2";
import Users from "./users";
import { GameModeContext } from "../context/GameModeContext";
import { Quiz2Context } from "../context/Quiz2Context";

import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";

//generates random quiz question every 8 seconds
import { data2 } from "../data/quiz2";

console.log(data2);

var qLength = data2.length;

export default function QuizScreen22() {
  let history = useHistory();

  const [gameMode, setGameMode] = useContext(GameModeContext);

  useEffect(() => {
    switch (gameMode) {
      case "3":
        console.log("game mode 3",gameMode)
        history.push('/triviaQuiz3')
       
        break;
    }
  }, [gameMode]);

  const {
    go2Flag,
    question2,
    dNumber2,
    dCategory2,
    colorize2,
    options2,
  } = useContext(Quiz2Context);
  const [go2, setGo2] = go2Flag;
  const [optioni2, setOptions2] = options2;
  const [colorCorrect2, setColorCorrect2] = colorize2;
  const [dashCategory2, setDashCategory2] = dCategory2;
  const [dashNo2, setDashNo2] = dNumber2;
  const [qText2, setQuestion2] = question2;



  var interval1 = 2000;
  var counter1 = 0;

  //deplay our array iteration

  function slowIterateQuestions(arr) {
    setColorCorrect2(false);
    if (arr.length === 0) {
      setGameMode(()=>"3");
      setGo2(false);
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
    console.log("is it initial?");
    console.log(gameMode, "Gamemode");
    console.log(go2, "go2 State");

    if (gameMode === "2" && go2) {
      slowIterateQuestions(data2);
    }
  }, [go2]);

  return (
    <div className="quizScreenf">
      <h1>Trivia Quiz 2 Screen</h1>
      <Dashboard2 />
      <hr />
      <Questions2 />
      <hr />
      <Options2 />
      <hr />
      <Users />
    </div>
  );
}
