import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import './App.css';
import TriviaQuiz from './components/Quiz'
import QuizScreen from './components/QuizScreen'
import TriviaQuizApp from './components/appOptions'
import {LoginProvider} from './context/LoginContext'
import {LastOptionProvider} from './context/LastOptionContext'
import { Quiz1Provider } from './context/Quiz1Context';

function App() {
  return (
    <LoginProvider>
    <LastOptionProvider>
    <Quiz1Provider>
    <Router>

            <Switch>
            <Route exact path="/"><TriviaQuiz/></Route>
            <Route path="/triviaQuiz"><QuizScreen/></Route>
            <Route path="/triviaQuizApp"><TriviaQuizApp/></Route>
            </Switch>
    </Router>
    </Quiz1Provider>
    </LastOptionProvider>
    </LoginProvider>

  );
}

export default App;
