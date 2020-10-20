import React, { useContext, useState } from 'react'
import Dashboard from './dashboard';
import Questions from './questions';
import Questions2 from './questions2'
import Options from './options';
import Options2 from './options2';

import Users from './users';
import {GameModeContext} from '../context/GameModeContext';

export default function QuizScreen() {


    const [gameMode,setGameMode]=useContext(GameModeContext);
    const[quiz2,setQuiz2]=useState(false)

    function buttonHandler(){
        setQuiz2(true)
    };

    return (
       <div className="quizScreenf">
       <h1>Trivia Quiz 2 Screen</h1>

       <button onClick={buttonHandler}>Go</button>
            <hr/>
           {quiz2 && <>
            <Dashboard/>
            <hr/>
            {(gameMode == "2")? <Questions2/> :<Questions/>}
            <hr/>
           {(gameMode == "2")? <Options2/> :<Options/>}
            <hr/>
            <Users/> 
          </> }
       </div>
       
    )
}




