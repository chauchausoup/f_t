import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, useHistory,Switch } from "react-router-dom";
import QuizScreen22 from './QuizScreen22';
import {GameModeContext} from '../context/GameModeContext'
import {Quiz2Context} from '../context/Quiz2Context'
export default function QuizScreen() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/triviaQuiz2">
            <Quiz2Home />
          </Route>
          <Route exact path="/triviaQuiz2/2/">
            <QuizScreen22 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Quiz2Home() {
  const [gameMode, setGameMode] = useContext(GameModeContext);
  const {go2Flag} =useContext(Quiz2Context)
  const [go2,setGo2]=go2Flag;

    let history=useHistory()
  

  function buttonHandler() {
    
    history.push(`/triviaQuiz2/2/`)
    window.location.reload()
    setGameMode("2")
    setGo2(true)
  }

  return (
    <div className="quizScreenf">
      <h1>Trivia Quiz 2 Screen</h1>
      <button onClick={buttonHandler}>Go</button>
    </div>
  );
}
