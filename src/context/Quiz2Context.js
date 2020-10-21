import React, { useState, createContext, useEffect, useContext } from "react";


export const Quiz2Context = createContext();

export const Quiz2Provider = (props) => {
  const [qText2, setQuestion2] = useState("");
  const [dashNo2, setDashNo2] = useState(0);
  const [dashCategory2, setDashCategory2] = useState("");
  const [colorCorrect2, setColorCorrect2] = useState(false);
  const [optioni2, setOptions2] = useState([
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
    { val: "", isCorrect: false },
  ]);
  const [go2, setGo2] = useState(true);

  return (
    <Quiz2Context.Provider
      value={{
        question2: [qText2, setQuestion2],
        dNumber2: [dashNo2, setDashNo2],
        dCategory2: [dashCategory2, setDashCategory2],
        colorize2: [colorCorrect2, setColorCorrect2],
        options2: [optioni2, setOptions2],
        go2Flag: [go2, setGo2],
      }}
    >
      {props.children}
    </Quiz2Context.Provider>
  );
};
