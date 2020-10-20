import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, useHistory,Switch } from "react-router-dom";
import QuizScreen22 from './QuizScreen22';

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
    let history=useHistory()
  

  function buttonHandler() {
    history.push(`/triviaQuiz2/2/`)
  }

  return (
    <div className="quizScreenf">
      <h1>Trivia Quiz 2 Screen</h1>
      <button onClick={buttonHandler}>Go</button>
    </div>
  );
}
