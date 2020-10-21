import React, { useState, createContext, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { GameModeContext } from "./GameModeContext";

export const Quiz1Context = createContext();

export const Quiz1Provider = (props) => {
  //var history = useHistory();

  const [qText, setQuestion] = useState("");
  const [dashNo, setDashNo] = useState(0);
  const [dashCategory, setDashCategory] = useState("");
  const [quiz1Over, setQuiz1Over] = useState(false);
  const [gameMode, setGameMode] = useContext(GameModeContext);
  const [optioni, setOptions] = useState([
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
  ]);
  const [go1, setGo1] = useState(true);

  const [colorCorrect, setColorCorrect] = useState(false);

  return (
    <Quiz1Context.Provider
      value={{
        question: [qText, setQuestion],
        dNumber: [dashNo, setDashNo],
        dCategory: [dashCategory, setDashCategory],
        quiz1State: [quiz1Over, setQuiz1Over],
        colorize: [colorCorrect, setColorCorrect],
        options: [optioni, setOptions],
        goFlag: [go1, setGo1],
      }}
    >
      {props.children}
    </Quiz1Context.Provider>
  );
};
