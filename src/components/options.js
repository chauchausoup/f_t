import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import io from "socket.io-client";
import "../index.css";
import { Quiz1Context } from "../context/Quiz1Context";
import {Option1Context} from "../context/Option1Context";

const ENDPOINT = "http://localhost:5000";
let socket = io(ENDPOINT);

export default function Options() {


    const { colorize,options} = useContext(Quiz1Context);
    const [colorCorrect,setColorCorrect] = colorize;
    const [optioni,setOptions] = options;

    const {op1,op2,op3,op4} = useContext(Option1Context)

      const [answerOption1, setAnswerOption1]=op1
      const [answerOption2, setAnswerOption2]=op2
      const [answerOption3, setAnswerOption3]=op3
      const [answerOption4, setAnswerOption4]=op4
    
 /*  const [answerOption1, setAnswerOption1] = useState([]);
  const [answerOption2, setAnswerOption2] = useState([]);
  const [answerOption3, setAnswerOption3] = useState([]);
  const [answerOption4, setAnswerOption4] = useState([]); */

  var [aValue, setAnswer] = useState({ personalInfo: {}, answer: 0 });

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
        <li key={1} className={colorCorrect && true ? "optionBoxGood" :"optionBox"} >
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
        <li key={2} className={colorCorrect && false ? "optionBoxGood" :"optionBox"} >
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
        <li key={3} className={colorCorrect && false ? "optionBoxGood" :"optionBox"} >
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
        <li key={4} className={colorCorrect && false ? "optionBoxGood" :"optionBox"} >
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

