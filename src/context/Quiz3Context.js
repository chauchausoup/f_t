import React, { useState, createContext, useEffect, useContext } from "react";


//generates random quiz question every 8 seconds


export const Quiz3Context = createContext();

export const Quiz3Provider = (props) => {
  const [qText3, setQuestion3] = useState("");
  const [dashNo3, setDashNo3] = useState(0);
  const [dashCategory3, setDashCategory3] = useState("");
  const [colorCorrect3, setColorCorrect3] = useState(false);
  const [optioni3, setOptions3] = useState([
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    
  ]);
  const [go3,setGo3]=useState(true)

 
  return (
    <Quiz3Context.Provider
      value={{
        question3: [qText3, setQuestion3],
        dNumber3: [dashNo3, setDashNo3],
        dCategory3: [dashCategory3, setDashCategory3],
        colorize3: [colorCorrect3, setColorCorrect3],
        options3:[optioni3,setOptions3],
        go3Flag:[go3,setGo3]
      }}
    >
      {props.children}
    </Quiz3Context.Provider>
  );
};
