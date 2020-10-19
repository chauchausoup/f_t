import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import io from "socket.io-client";
import "../index.css";
import { Quiz2Context } from "../context/Quiz2Context";
import {data2} from '../data/quiz2'

const ENDPOINT = "http://localhost:5000";
let socket = io(ENDPOINT);



export default function Options() {
/*     const { optionArray} = useContext(Quiz1Context);
    const [optioni,setOptions] = optionArray; */
    const { colorize2} = useContext(Quiz2Context);
    const [colorCorrect2,setColorCorrect2] = colorize2;
    
  const [answerOption1, setAnswerOption1] = useState([]);
  const [answerOption2, setAnswerOption2] = useState([]);
  const [answerOption3, setAnswerOption3] = useState([]);
  const [answerOption4, setAnswerOption4] = useState([]);

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
      <ol className="optionSecond">
        <li key={1} className={colorCorrect2 && true ? "optionBox2Good2" :"optionBox2"} >
          <p>option one</p>
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
        <li key={2} className={colorCorrect2 && false ? "optionBox2Good2" :"optionBox2"} >
          <div>
            <p>option two</p>
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
        <li key={3} className={colorCorrect2 && false ? "optionBox2Good2" :"optionBox2"} >
          <p>option three</p>
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
        <li key={4} className={colorCorrect2 && false ? "optionBox2Good2" :"optionBox2"} >
          <p>option four</p>
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

