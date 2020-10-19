import React from 'react'
import Dashboard from './dashboard';
import Questions from './questions';
import Options from './options';
import Users from './users';


export default function QuizScreen() {
    return (
       <div className="quizScreenf">
       <h1>Trivia Quiz Screen</h1>
            <hr/>
           
            <Dashboard/>
            <hr/>
            <Questions/>
            <hr/>
            <Options />
            <hr/>
            <Users/> 
       
       </div>
       
    )
}




