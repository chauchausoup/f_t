import React, { useState, useContext } from "react";
import Authen from "./Authen";
import { LastOptionContext } from "../context/LastOptionContext";
import { Radio, Input } from "antd";
import "antd/dist/antd.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import io from "socket.io-client";
const ENDPOINT = "http://localhost:5000";
let socket = io(ENDPOINT);

export default function AppOptions() {
  const [input1, setInput1] = useState(1);
  const [input2, setInput2] = useState(2);
  const [input3, setInput3] = useState(3);
  const [input4, setInput4] = useState(4);
  const [lastInput, setLastInput] = useContext(LastOptionContext);

  var aValue = {
    personalInfo: JSON.parse(localStorage.getItem("personalInfo")),
    answer: 0,
  };

  const handleInputSubmission = () => {
    aValue["answer"] = lastInput;
    console.log(lastInput);
    socket.emit("lastAnswer", JSON.stringify(aValue));
  };

  const handle1 = (e) => {
    e.preventDefault();
    setInput1(1);
    console.log(e.target.value);
    setLastInput(e.target.value);
    aValue["answer"] = input1;
    socket.emit("answer", JSON.stringify(aValue));
  };

  const handle2 = (e) => {
    e.preventDefault();
    setInput2(2);
    console.log(e.target.value);
    setLastInput(e.target.value);
    aValue["answer"] = input2;
    socket.emit("answer", JSON.stringify(aValue));
  };

  const handle3 = (e) => {
    e.preventDefault();
    setInput3(3);
    console.log(e.target.value);
    setLastInput(e.target.value);
    aValue["answer"] = input3;
    socket.emit("answer", JSON.stringify(aValue));
  };
  const handle4 = (e) => {
    e.preventDefault();
    setInput4(4);
    console.log(e.target.value);
    setLastInput(e.target.value);
    aValue["answer"] = input4;
    socket.emit("answer", JSON.stringify(aValue));
  };

  return (
    <div>
      <Authen className="authenButton" />

      <CategorialOption />

      <hr />
      <button onClick={handle1} value={input1}>
        1
      </button>
      <br />
      <button onClick={handle2} value={input2}>
        2
      </button>
      <br />
      <button onClick={handle3} value={input3}>
        3
      </button>
      <br />
      <button onClick={handle4} value={input4}>
        4
      </button>
      <br />
      <hr />
      <button onClick={handleInputSubmission}>Go</button>
    </div>
  );
}

function CategorialOption() {
  const [radioState, setRadioState] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setRadioState(e.target.value);
  };

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const { value } = radioState;

  /* 
1. History
2. Geography
3. Science and Nature
4. Sports
5. Arts and Literature
6. Entertainment

*/
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio style={radioStyle} value={1} checked={true}>
        History
      </Radio>
      <Radio style={radioStyle} value={2} checked={true}>
        Geography
      </Radio>
      <Radio style={radioStyle} value={3} checked={true}>
        Science and Nature
      </Radio>
      <Radio style={radioStyle} value={4} checked={true}>
        Sports
      </Radio>
      <Radio style={radioStyle} value={5} checked={true}>
        Art and Literature
      </Radio>
      <Radio style={radioStyle} value={6} checked={true}>
        Entertainment
      </Radio>
    </Radio.Group>
  );
}
