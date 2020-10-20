import React, { useContext,useEffect } from 'react'
import Dashboard from './dashboard';
import Questions from './questions';
import Options from './options';

import Users from './users';
import {GameModeContext} from '../context/GameModeContext';

export default function QuizScreen() {
    const [gameMode,setGameMode]=useContext(GameModeContext);

    useEffect(()=>{
        switch(gameMode){
    
            case "2":
                window.history.replaceState(null, "New Page Title", "/triviaQuiz2");
                window.location.reload()
                break;
            case "3":
                break;
        }
    
    },[gameMode])
       

    return (
       <div className="quizScreenf">
       <h1>Trivia Quiz Screen</h1>
            <hr/>
           
            <Dashboard/>
            <hr/>
            {<Questions/>}
            <hr/>
           { <Options/>}
            <hr/>
            <Users/> 
       
       </div>
       
    )
}




