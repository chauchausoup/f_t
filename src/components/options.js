import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import io from "socket.io-client";
import "../index.css";
import { Quiz1Context } from "../context/Quiz1Context";
import {Option1Context} from "../context/Option1Context";

const ENDPOINT = "http://localhost:5000";
let socket = io(ENDPOINT);




function setTimedIntervalColor(callback, delayColors, timout) {
  var idOptionsColor = window.setTimeout(callback, delayColors);

  window.setTimeout(() => {
    window.clearTimeout(idOptionsColor);
    
  }, timout);
}



export default function Options() {




    const {options,colorize} = useContext(Quiz1Context);
    const [optioni,setOptions] = options;

    const {op1,op2,op3,op4} = useContext(Option1Context)

      const [answerOption1, setAnswerOption1]=op1
      const [answerOption2, setAnswerOption2]=op2
      const [answerOption3, setAnswerOption3]=op3
      const [answerOption4, setAnswerOption4]=op4
    

  const [colorCorrect,setColorCorrect] = colorize;


  var [aValue, setAnswer] = useState({ personalInfo: {}, answer: 0 });


   useEffect(() => {
    console.log(optioni);

    setTimedIntervalColor(
      () => {
        setColorCorrect(true);
        console.log("IN color");
      },
      1000,
      2000
    );
  }, [optioni]);

  useEffect(() => {
    socket.on("screenAns", (input) => {
      setAnswer(() => JSON.parse(input));
    });
    console.log(aValue);
  }, []);

  useEffect(() => {
    console.log(answerOption1);
    switch (aValue.answer) {
      case 1:
        setAnswerOption1([...answerOption1, aValue]);
        break;
      case 2:
        setAnswerOption2([...answerOption2, aValue]);
        break;
      case 3:
        setAnswerOption3([...answerOption3, aValue]);

        break;
      case 4:
        setAnswerOption4([...answerOption4, aValue]);

        break;
    }
  }, [aValue]);

  return (
    <div>
      <ol>
        <li key={1} className={colorCorrect && optioni[0].isCorrect ? "optionBoxGood" :"optionBox"} >
          <p>{optioni[0].val}</p>
          <ul className="optionUsers">
            {answerOption1.map((item, index) => (
              <li key={uuidv4()}>
                <img
                  style={{ width: 20, marginTop: -5 }}
                  className="gImage"
                  src={item.personalInfo.imageUrl}
                />
              </li>
            ))}
          </ul>
        </li>
        <li key={2} className={colorCorrect && optioni[1].isCorrect ? "optionBoxGood" :"optionBox"} >
          <div>
            <p>{optioni[1].val}</p>
            <ul className="optionUsers">
              {answerOption2.map((item, index) => (
                <li key={uuidv4()}>
                  <img
                    style={{ width: 20, marginTop: -5 }}
                    className="gImage"
                    src={item.personalInfo.imageUrl}
                  />
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li key={3} className={colorCorrect && optioni[2].isCorrect ? "optionBoxGood" :"optionBox"} >
          <p>{optioni[2].val}</p>
          <ul className="optionUsers">
            {answerOption3.map((item, index) => (
              <li key={uuidv4()}>
                <img
                  style={{ width: 20, marginTop: -5 }}
                  className="gImage"
                  src={item.personalInfo.imageUrl}
                />
              </li>
            ))}
          </ul>
        </li>
        <li key={4} className={colorCorrect && optioni[3].isCorrect ? "optionBoxGood" :"optionBox"} >
          <p>{optioni[3].val}</p>
          <ul className="optionUsers">
            {answerOption4.map((item, index) => (
              <li key={uuidv4()}>
                <img
                  style={{ width: 20, marginTop: -5 }}
                  className="gImage"
                  src={item.personalInfo.imageUrl}
                />
              </li>
            ))}
          </ul>
        </li>
      </ol>
    </div>
  );
}

