import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import './App.css';
import TriviaQuiz from './components/Quiz'
import QuizScreen from './components/QuizScreen'
import TriviaQuizApp from './components/appOptions'
import TriviaQuizApp2 from './components/appOption2'
import TriviaQuizApp3 from './components/appOption3'

import {LoginProvider} from './context/LoginContext'
import {LastOptionProvider} from './context/LastOptionContext'
import { Quiz1Provider } from './context/Quiz1Context';
import { GameModeProvider } from './context/GameModeContext';
import { Quiz2Provider } from './context/Quiz2Context';

function App() {
  return (
    <LoginProvider>
    <LastOptionProvider>
    <Quiz1Provider>
    <Quiz2Provider>
    <GameModeProvider>
    <Router>

            <Switch>
            <Route exact path="/"><TriviaQuiz/></Route>
            <Route path="/triviaQuiz"><QuizScreen mode={1}/></Route>
            <Route path="/triviaQuiz2"><QuizScreen mode={2}/></Route>
            <Route path="/triviaQuiz3"><QuizScreen mode={3}/></Route>
            <Route path="/triviaQuizApp"><TriviaQuizApp/></Route>
            <Route path="/triviaQuizApp2"><TriviaQuizApp2/></Route>
            <Route path="/triviaQuizApp3"><TriviaQuizApp3/></Route>

            </Switch>
    </Router>
    </GameModeProvider>
    </Quiz2Provider>
    </Quiz1Provider>
    </LastOptionProvider>
    </LoginProvider>

  );
}

export default App;
