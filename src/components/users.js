import React,{useState,useEffect,useContext} from 'react'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";

import io from "socket.io-client";
import {LastOptionContext} from '../context/LastOptionContext';
import '../index.css'

const ENDPOINT = "http://localhost:5000";
let socket = io(ENDPOINT);



var styleProgress={
    "width":"100px",
    "height":"100px"
}

function Users(){
    const [scoreK,setScoreK]=useState(0);
    const [scoreN,setScoreN]=useState(0);
    const [scoreS,setScoreS]=useState(0);
    const [totalScore,setScoreTotal]=useState(0)
    const [lastInput, setLastInput] = useContext(LastOptionContext);

    useEffect(() => {
        socket.on("scoreAns", (lastScore) => {
          switch(lastScore.giveName){
            case "Krishna":
                setScoreK(lastScore.points);
                setScoreTotal(lastScore.totalPoints)
                break;
            case "Nanda":
                setScoreN(lastScore.points);
                setScoreTotal(lastScore.totalPoints)

                break;
            case "Shesh":
                setScoreS(lastScore.points);
                setScoreTotal(lastScore.totalPoints)

                break;

          }
        });
       
       
       
      }, [lastInput]);

    return (
        <div>
        <ul className="usersList">
                <li key={1} className="userList">
                <Name value="Krishna"/>  
                <Total score={scoreK}/> 
                <Wedge score={scoreK} totalScore={totalScore}/> 
                </li>
                <li key={2} className="userList">
                <Name value="Nanda"/>  
                <Total score={scoreN}/> 
                <Wedge score={scoreN} totalScore={totalScore}/> 

                </li>
                <li key={3} className="userList">
                <Name value="Shesh"/> 
                <Total score={scoreS}/> 
                <Wedge score={scoreS} totalScore={totalScore}/>     
                </li>
               
        </ul>
            
        </div>
    );
};

export default Users;


function Name(props){
    return(
        <p>{props.value}</p>
    )
}

function Wedge(props){
    var percentage=parseFloat((parseInt(props.score)/parseInt(props.totalScore))*100);
    return(
       <div className="progressCircle">
            <CircularProgressbarWithChildren value={percentage}>
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <img
          style={{ width: 30, marginTop: -5 }}
          className="gImage"
          src="https://lh3.googleusercontent.com/a-/AOh14Gh_eIr194U36wPfApf8NCMvCpJliayGgHe_9m0N=s96-c"
          alt="doge"
        />
        <div style={{ fontSize: 12, marginTop: -5 }}>
          <strong>{percentage}%</strong>
        </div>
      </CircularProgressbarWithChildren>
       </div>
    )
}

function Total(props){
    return(
        <p>Score:{props.score}</p>

    )
}
