import React, { useState, createContext, useEffect, useContext } from "react";
import "../index.css";

import { GameModeContext } from "../context/GameModeContext";

export const Option1Context = createContext();

export const Option1Provider = (props) => {

    const [answerOption1, setAnswerOption1] =useState([]);
    const [answerOption2, setAnswerOption2]=useState([]);
    const [answerOption3, setAnswerOption3]=useState([]);
    const [answerOption4, setAnswerOption4]=useState([]);



  return (
    <Option1Context.Provider
      value={{
        op1: [answerOption1, setAnswerOption1],
        op2: [answerOption2, setAnswerOption2],
        op3: [answerOption3, setAnswerOption3],
        op4: [answerOption4, setAnswerOption4]
      }}
    >
      {props.children}
    </Option1Context.Provider>
  );
};
