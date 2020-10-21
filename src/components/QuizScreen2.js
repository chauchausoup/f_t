import React, { useContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";
import QuizScreen22 from "./QuizScreen22";
import { GameModeContext } from "../context/GameModeContext";
import { Quiz2Context } from "../context/Quiz2Context";



export default function QuizScreen2() {
  return (
    <Router>
     
        <Switch>
          <Route exact path="/triviaQuiz2">
            <Quiz2Home/>
          </Route>
          <Route exact path="/triviaQuiz2/2/">
            <QuizScreen22/>
          </Route>
        </Switch>
     
    </Router>
  );
}

function Quiz2Home() {
  let history=useHistory()
  
  const [gameMode, setGameMode] = useContext(GameModeContext);
 const {go2Flag}=useContext(Quiz2Context)
 const [go2,setGo2]=go2Flag;



  function buttonHandler() {
    setGameMode(()=>"2");
    setGo2(true);
    console.log(`goto ${go2}`);
    console.log(`gameMode ${gameMode}`);
    history.push(`/triviaQuiz2/2/`);

    //window.location.reload();
  }

  return (
    <div className="quizScreenf">
      <h1>Trivia Quiz 2 Screen</h1>
      <button onClick={buttonHandler}>Go</button>
    </div>
  );
}
