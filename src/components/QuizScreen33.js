import React, { useContext,useEffect } from "react";
import Dashboard3 from "./dashboard3";
import Questions3 from "./questions3";
import Options3 from "./options3";
import Users from "./users";
import { GameModeContext } from "../context/GameModeContext";
import { BrowserRouter as Router, Route, useHistory,Switch } from "react-router-dom";

import {Quiz3Context} from '../context/Quiz3Context'


import { data3 } from "../data/quiz3";
//import {o3} from '../data/options3'

console.log(data3);

var qLength = data3.length;
console.log(qLength);



export default function QuizScreen33(){
  let history=useHistory();
  const [gameMode, setGameMode] = useContext(GameModeContext);

  useEffect(()=>{
    switch(gameMode){

        case "4":
          history.push('/results')
         
    }

},[gameMode])




  const {
    go3Flag,
    question3,
    dNumber3,
    dCategory3,
    colorize3,
    options3,
  } = useContext(Quiz3Context);
  const [go3, setGo3] = go3Flag;
  const [optioni3, setOptions3] = options3;
  const [colorCorrect3, setColorCorrect3] = colorize3;
  const [dashCategory3, setDashCategory3] = dCategory3;
  const [dashNo3, setDashNo3] = dNumber3;
  const [qText3, setQuestion3] = question3;


  useEffect(() => {
    if(gameMode== "3" && go3){
      slowIterateQuestions(data3);
    }
  }, [go3]); 
  
  


 //we need something to map our array of object that
 var interval1 = 5000;
 var counter1 = 0;

 //deplay our array iteration

 function slowIterateQuestions(arr) {
   setColorCorrect3(false);
   if (arr.length === 0) {
     setGameMode("4");
     setGo3(false)
     return;
   }

   counter1++;
   setDashNo3(qLength - counter1);
   setDashCategory3(arr[0].category);
   setQuestion3(arr[0].question);
   setOptions3(() => [...arr[0].optione]);

   setTimeout(() => {
     slowIterateQuestions(arr.slice(1));
   }, interval1);
 }



  return (
   
    <div className="quizScreenf">
      <h1>Trivia Quiz 3 Screen</h1>
      <Dashboard3 />
      <hr />
      <Questions3 />
      <hr />
      <Options3 />
      <hr />
      <Users />
    </div>
  );
}
