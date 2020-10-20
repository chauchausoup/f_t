import React, { useContext, useState ,useEffect} from "react";
import Dashboard2 from "./dashboard2";
import Questions from "./questions";
import Questions2 from "./questions2";
import Options from "./options";
import Options2 from "./options2";
import Users from "./users";
import { GameModeContext } from "../context/GameModeContext";
import { BrowserRouter as Router, Route, useHistory,Switch } from "react-router-dom";

export default function QuizScreen22(){
  const [gameMode, setGameMode] = useContext(GameModeContext);

  useEffect(()=>{
      switch(gameMode){
  
          case "2":
             // window.history.replaceState(null, "New Page Title", "/triviaQuiz2");
             // window.location.reload()
              break;
          case "3":

            window.history.replaceState(null, "New Page Title", "/triviaQuiz3");
            window.location.reload()
            break;
      }
  
  },[gameMode])

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
