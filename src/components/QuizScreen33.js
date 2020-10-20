import React, { useContext, useState,useEffect } from "react";
import Dashboard3 from "./dashboard3";
import Questions from "./questions";
import Questions3 from "./questions3";
import Options from "./options";
import Options3 from "./options3";
import Users from "./users";
import { GameModeContext } from "../context/GameModeContext";
import { BrowserRouter as Router, Route, useHistory,Switch } from "react-router-dom";

export default function QuizScreen33(){
  const [gameMode, setGameMode] = useContext(GameModeContext);

  useEffect(()=>{
    switch(gameMode){

        case "2":
           // window.history.replaceState(null, "New Page Title", "/triviaQuiz2");
           // window.location.reload()
            break;
        case "3":

          /* window.history.replaceState(null, "New Page Title", "/triviaQuiz3");
          window.location.reload() */
          break;
        case "4":
          window.history.replaceState(null, "New Page Title", "/results");
          window.location.reload()
    }

},[gameMode])

  return (
   
    <div className="quizScreenf">
      <h1>Trivia Quiz 3 Screen</h1>
      <Dashboard3 />
      <hr />
      <Questions3 />
      <hr />
      <Options3 />
      <hr />
      <Users />
    </div>
  );
}
