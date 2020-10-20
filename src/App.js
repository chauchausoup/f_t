import React from 'react';
import {BrowserRouter as Router,Route,Switch, useHistory} from 'react-router-dom'

import './App.css';
import TriviaQuiz from './components/Quiz'
import QuizScreen from './components/QuizScreen'
import QuizScreen2 from './components/QuizScreen2'
import QuizScreen22 from './components/QuizScreen22';


import QuizScreen3 from './components/QuizScreen3'
import QuizScreen33 from './components/QuizScreen33';


import TriviaQuizApp from './components/appOptions'
import TriviaQuizApp2 from './components/appOption2'
import TriviaQuizApp3 from './components/appOption3'

import Results from './components/Results'



import {LoginProvider} from './context/LoginContext'
import {LastOptionProvider} from './context/LastOptionContext'
import { Quiz1Provider } from './context/Quiz1Context';
import { GameModeProvider } from './context/GameModeContext';
import { Quiz2Provider } from './context/Quiz2Context';
import { Quiz3Provider } from './context/Quiz3Context';

function App() {

  return (
    <LoginProvider>
    <LastOptionProvider>
    <GameModeProvider>
    <Quiz1Provider>
    <Quiz2Provider>
    <Quiz3Provider>
    <Router>

            <Switch>
            <Route exact path="/"><TriviaQuiz/></Route>
            <Route path="/triviaQuiz"><QuizScreen/></Route>
            <Route path="/triviaQuiz2"><QuizScreen2 /></Route>
            <Route path="/triviaQuiz2/2"><QuizScreen22 /></Route>
            <Route path="/triviaQuiz3"><QuizScreen3 /></Route>
            <Route path="/triviaQuiz3/3"><QuizScreen33 /></Route>
            <Route path="/triviaQuizApp"><TriviaQuizApp/></Route>
            <Route path="/triviaQuizApp2"><TriviaQuizApp2/></Route>
            <Route path="/triviaQuizApp3"><TriviaQuizApp3/></Route>
            <Route path="/results"><Results/></Route>

            </Switch>
    </Router>
    </Quiz3Provider>
    </Quiz2Provider>
    </Quiz1Provider>
    </GameModeProvider>

    </LastOptionProvider>
    </LoginProvider>

  );
}

export default App;
