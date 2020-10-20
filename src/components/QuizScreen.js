import React, { useContext } from 'react'
import Dashboard from './dashboard';
import Questions from './questions';
import Options from './options';

import Users from './users';
import {GameModeContext} from '../context/GameModeContext';

export default function QuizScreen() {
    const [gameMode,setGameMode]=useContext(GameModeContext);

    return (
       <div className="quizScreenf">
       <h1>Trivia Quiz Screen</h1>
            <hr/>
           
            <Dashboard/>
            <hr/>
            {(gameMode == 1)? <Questions/> :null}
            <hr/>
           {(gameMode == 1)? <Options/> :null}
            <hr/>
            <Users/> 
       
       </div>
       
    )
}




