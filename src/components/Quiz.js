import React,{useState,useContext, useEffect} from 'react'
import { useHistory} from 'react-router-dom'
//import QuizScreen from './QuizScreen'
import '../index.css'


import {GameModeContext} from '../context/GameModeContext';


export default function Quiz() {

    let history = useHistory();

    const handleQuizButton=()=>{
        history.push(`/triviaQuiz`)
        
        //window.location.reload()
    }
    const handleQuizButton2=()=>{
        history.push(`/triviaQuiz2`)
        //window.location.reload()

    }
    const handleQuizButton3=()=>{
        history.push(`/triviaQuiz3`)
    }
    const handleQuizButtonApp=()=>{
        history.push(`/triviaQuizApp`)
    }
    const handleQuizButtonApp2=()=>{
        history.push(`/triviaQuizApp2`)
    }
    const handleQuizButtonApp3=()=>{
        history.push(`/triviaQuizApp3`)
    }
    
    
    return (
        <>
        <img
          style={{ width: 30, marginTop: -5 }}
          className="gImage"
          src={JSON.parse(localStorage.getItem("personalInfo")).imageUrl}
        />
        <br/>
        <a><button onClick={handleQuizButtonApp}>App 1</button></a>
        <br/>
        <button onClick={handleQuizButtonApp2}>App 2</button>
        <br/>
        <button onClick={handleQuizButtonApp3}>App 3</button>
        <br/>
        <br/>
        <button onClick={handleQuizButton} >Quiz Trivia Screen</button>
        <button onClick={handleQuizButton2} >Quiz Trivia Screen 2</button>
        <button onClick={handleQuizButton3} >Quiz Trivia Screen 3</button>
        </>
    )
}
