import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";
import QuizScreen33 from "./QuizScreen33";
import { GameModeContext } from "../context/GameModeContext";

import { Quiz3Context } from "../context/Quiz3Context";

export default function QuizScreen3() {
  return (
    <Router>
      
        <Switch>
          <Route exact path='/triviaQuiz3'>
            <Quiz3Home/>
          </Route>
          <Route exact path="/triviaQuiz3/3/">
            <QuizScreen33 />
          </Route>
        </Switch>
      
    </Router>
  );
}

function Quiz3Home(){
  var history = useHistory();

  const [gameMode, setGameMode] = useContext(GameModeContext);
  const { go3Flag } = useContext(Quiz3Context);
  const [go3, setGo3] = go3Flag;

  function buttonHandler() {
    setGameMode(()=>"3");
    setGo3(true);
    console.log(`goto ${go3}`);
    console.log(`gameMode ${gameMode}`);
    history.push(`/triviaQuiz3/3`);
  }

  return (
    <div className="quizScreenf">
      <h1>Trivia Quiz 3 Screen</h1>
      <button onClick={buttonHandler}>Go</button>
    </div>
  );
}
