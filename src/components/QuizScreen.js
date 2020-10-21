import React, { useContext, useEffect } from "react";
import Dashboard from "./dashboard";
import Questions from "./questions";
import Options from "./options";

import Users from "./users";
import { GameModeContext } from "../context/GameModeContext";
import { Option1Context } from "../context/Option1Context";
import { Quiz1Context } from "../context/Quiz1Context";
import { useHistory } from "react-router-dom";

//generates random quiz question every 8 seconds

var quizOnes = require("../data/quiz1.json");
var qLength = quizOnes.length;

export default function QuizScreen1() {
    let history=useHistory();

  const [gameMode, setGameMode] = useContext(GameModeContext);

  useEffect(() => {
    switch (gameMode) {
      case "2":
          history.push('/triviaQuiz2')
          break;
    }
  }, [gameMode]);

  //options from quiz one
  const { op1, op2, op3, op4 } = useContext(Option1Context);

  const [answerOption1, setAnswerOption1] = op1;
  const [answerOption2, setAnswerOption2] = op2;
  const [answerOption3, setAnswerOption3] = op3;
  const [answerOption4, setAnswerOption4] = op4;

  const {
    goFlag,
    question,
    dNumber,
    dCategory,
    colorize,
    options,
    quiz1State,
  } = useContext(Quiz1Context);
  const [go1, setGo1] = goFlag;
  const [optioni, setOptions] = options;
  const [colorCorrect, setColorCorrect] = colorize;
  const [dashCategory, setDashCategory] = dCategory;
  const [dashNo, setDashNo] = dNumber;
  const [qText, setQuestion] = question;
  const [quiz1Over, setQuiz1Over] = quiz1State;

  var interval1 = 1000;

  var counter1 = 0;

  //deplay our array iteration

  function slowIterateQuestions(arr) {
    if (arr.length === 0) {
      setQuiz1Over(true);
      setGameMode(() => "2");
      setGo1(false);
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

    setAnswerOption1([]);
    setAnswerOption2([]);
    setAnswerOption3([]);
    setAnswerOption4([]);

    setColorCorrect(false);

    setTimeout(() => {
      slowIterateQuestions(arr.slice(1));
    }, interval1);
  }

  useEffect(() => {
      console.log(gameMode,"gameMode")
        console.log(go1,"go1")

    if (gameMode == "1" && go1) slowIterateQuestions(quizOnes);
  }, [go1]);

  return (
    <div className="quizScreenf">
      <h1>Trivia Quiz Screen</h1>
      <hr />

      <Dashboard />
      <hr />
      {<Questions />}
      <hr />
      {<Options />}
      <hr />
      <Users />
    </div>
  );
}
