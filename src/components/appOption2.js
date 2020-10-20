import React, { useState,useContext, useEffect } from "react";
import Authen from "./Authen";
import {LastOptionContext} from '../context/LastOptionContext';


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

  const [input,setInput]=useState({
    "b1":"",
  });

 /*  const [input1, setInput1] = useState(1);
  const [input2, setInput2] = useState(2);
  const [input3, setInput3] = useState(3);
  const [input4, setInput4] = useState(4);
  const [input5, setInput5] = useState(5);
  const [input6, setInput6] = useState(6);
  const [input7, setInput7] = useState(7);
  const [input8, setInput8] = useState(8);
  const [input9, setInput9] = useState(9);
  const [input10, setInput10] = useState(10);
  const [input11, setInput11] = useState(11);
  const [input12, setInput12] = useState(12);
  const [input13, setInput13] = useState(13);
  const [input14, setInput14] = useState(14);
  const [input15, setInput15] = useState(15);
  const [input16, setInput16] = useState(16); */
  
  


  var aValue = {
    personalInfo: JSON.parse(localStorage.getItem("personalInfo")),
    answer: 0,
  };

/*   const handle1 = (e) => {
    e.preventDefault();
    setInput1(1);
    console.log(e.target.value);
    aValue["answer"] = input1;
    socket.emit("answer", JSON.stringify(aValue));
  };
 */


  const handleClick=(e)=>{
    e.preventDefault();
    e.persist()
   // console.log(e.target.name)
     setInput((prevState)=>({
     ...prevState,
     [e.target.name]:e.target.value
   }))

 
  }


  useEffect(()=>{
    console.log(input)
    aValue["answer"]=input;
    socket.emit("answer",JSON.stringify(aValue))
  },[input])


/*   const handle2 = (e) => {
    e.preventDefault();
    setInput2(2);
    console.log(e.target.value);
    aValue["answer"] = input2;
    socket.emit("answer", JSON.stringify(aValue));
  };

  const handle3 = (e) => {
    e.preventDefault();
    setInput3(3);
    console.log(e.target.value);
    aValue["answer"] = input3;
    socket.emit("answer", JSON.stringify(aValue));
  };
  const handle4 = (e) => {
    e.preventDefault();
    setInput4(4);
    console.log(e.target.value);
    aValue["answer"] = input4;
    socket.emit("answer", JSON.stringify(aValue));
  }; */

  return (
    <div>
      <Authen className="authenButton" />

      <hr />
      <button onClick={handleClick} value="1" name="b1">
        1
      </button>
      <br />
      <button onClick={handleClick} value="2" name="b2">
        2
      </button>
      <br />
      <button onClick={handleClick} value="3" name="b3">
        3
      </button>
      <br />
      <button onClick={handleClick} value="4" name="b4">
        4
      </button>
      <br />
      {/* <button onClick={handleClick} value={input2}>
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
      <button onClick={handle1} value={input5}>
        5
      </button>
      <br />
      <button onClick={handle2} value={input6}>
        6
      </button>
      <br />
      <button onClick={handle3} value={input7}>
        7
      </button>
      <br />
      <button onClick={handle4} value={input8}>
        8
      </button>
      <br />
      <button onClick={handle1} value={input9}>
        9
      </button>
      <br />
      <button onClick={handle2} value={input10}>
        10
      </button>
      <br />
      <button onClick={handle3} value={input11}>
        11
      </button>
      <br />
      <button onClick={handle4} value={input12}>
        12
      </button>
      <br />
      <button onClick={handle1} value={input13}>
        13
      </button>
      <br />
      <button onClick={handle2} value={input14}>
        14
      </button>
      <br />
      <button onClick={handle3} value={input15}>
        15
      </button>
      <br />
      <button onClick={handle4} value={input16}>
        16
      </button> */}
      <br />
      <hr />
      
    </div>
  );
}
