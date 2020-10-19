import React, { useContext } from 'react'
import Dashboard from './dashboard';
import Questions from './questions';
import Options from './options';
import Options2 from './options2';

import Users from './users';
import {GameModeContext} from '../context/GameModeContext';

export default function QuizScreen(props) {
    const [gameMode,setGameMode]=useContext(GameModeContext);

    return (
       <div className="quizScreenf">
       <h1>Trivia Quiz Screen</h1>
            <hr/>
           
            <Dashboard mode={props.mode}/>
            <hr/>
            <Questions mode={props.mode}/>
            <hr/>
           {(gameMode=="2")? <Options2/> :<Options/>}
            <hr/>
            <Users mode={props.mode}/> 
       
       </div>
       
    )
}




