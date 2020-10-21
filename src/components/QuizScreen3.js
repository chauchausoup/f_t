
import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, useHistory,Switch } from "react-router-dom";
import QuizScreen33 from './QuizScreen33';

export default function QuizScreen3() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/triviaQuiz3">
            <Quiz3Home/>
          </Route>
          <Route exact path="/triviaQuiz3/3">
            <QuizScreen33 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Quiz3Home() {
    

    let history=useHistory()
  function buttonHandler() {
    history.push(`/triviaQuiz3/3`)
  }

  return (
    <div className="quizScreenf">
      <h1>Trivia Quiz 3 Screen</h1>
      <button onClick={buttonHandler}>Go</button>
    </div>
  );
}
