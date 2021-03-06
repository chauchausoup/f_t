import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import io from "socket.io-client";
import "../index.css";
import { Quiz3Context } from "../context/Quiz3Context";


const ENDPOINT = "http://localhost:5000";
let socket = io(ENDPOINT);

export default function Options() {
/*     const { optionArray} = useContext(Quiz3Context);
    const [optioni,setOptions] = optionArray; */

    const { colorize3,options3} = useContext(Quiz3Context);
    const [colorCorrect3,setColorCorrect3] = colorize3;
    const [optioni3,setOptions3] = options3;
    
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
      <ol>
        <li key={1} className={colorCorrect3 && true ? "optionBoxGood" :"optionBox"} >
          <p>{optioni3[0].val}</p>
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
        <li key={2} className={colorCorrect3 && false ? "optionBoxGood" :"optionBox"} >
          <div>
            <p>{optioni3[1].val}</p>
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
        <li key={3} className={colorCorrect3 && false ? "optionBoxGood" :"optionBox"} >
          <p>{optioni3[2].val}</p>
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
        <li key={4} className={colorCorrect3 && false ? "optionBoxGood" :"optionBox"} >
          <p>{optioni3[3].val}</p>
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

