import React, { useContext } from 'react'
import Dashboard from './dashboard';
import Questions from './questions';
import Questions2 from './questions2'
import Options from './options';
import Options2 from './options2';

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
            {(gameMode == "3")? <Questions/> :<Questions2/>}
            <hr/>
           {(gameMode == "3")? <Options/> :<Options2/>}
            <hr/>
            <Users/> 
       
       </div>
       
    )
}



