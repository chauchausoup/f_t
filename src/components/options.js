import React,{useState,useEffect,useContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import io from "socket.io-client";
import '../index.css'

const ENDPOINT = "http://localhost:5000";
let socket = io(ENDPOINT);


var quizOnes = require('../data/quiz1.json')


export default function Options() {
    const [answerOption1,setAnswerOption1]=useState([])
    const [answerOption2,setAnswerOption2]=useState([])
    const [answerOption3,setAnswerOption3]=useState([])
    const [answerOption4,setAnswerOption4]=useState([])

   

    var [aValue, setAnswer] = useState({ personalInfo: {}, answer: 0 });

    useEffect(() => {
      socket.on("screenAns", (input) => {
        setAnswer(()=>(JSON.parse(input)));
      });
      console.log(aValue);
     
    }, []);

   
    useEffect(() => {
        console.log(answerOption1)
    switch(aValue.answer){
        case 1:
            setAnswerOption1([...answerOption1,aValue])
            break;
        case 2:
            setAnswerOption2([...answerOption2,aValue])
            break;
        case 3:
            setAnswerOption3([...answerOption3,aValue])

            break;
        case 4:
            setAnswerOption4([...answerOption4,aValue])

            break;
        }
      }, [aValue]);



    return (
        <div>
            <ol>
                <li key={1}>
                    <p>{quizOnes[0].options[0].value}</p>
                        <ul className="optionUsers">{answerOption1.map((item,index)=>(
                            <li key={uuidv4()}><img
                            style={{ width: 20, marginTop: -5 }}
                            className="gImage"
                            src={item.personalInfo.imageUrl}
                            /></li>
                        ))}
                        </ul>
                </li>
                <li key={2}>
                    <div>
                        <p>{quizOnes[0].options[1].value}</p>
                        <ul className="optionUsers">{answerOption2.map((item,index)=>(
                                <li key={uuidv4()}><img
                                style={{ width: 20, marginTop: -5 }}
                                className="gImage"
                                src={item.personalInfo.imageUrl}
                                /></li>
                            ))}
                            </ul>
                    </div>
                </li>
                <li key={3}>
                    <p>{quizOnes[0].options[2].value}</p>
                    <ul className="optionUsers">{answerOption3.map((item,index)=>(
                            <li key={uuidv4()}><img
                            style={{ width: 20, marginTop: -5 }}
                            className="gImage"
                            src={item.personalInfo.imageUrl}
                            /></li>
                        ))}
                        </ul>
                </li>
                <li key={4}>
                    <p>{quizOnes[0].options[3].value}</p>
                    <ul className="optionUsers">{answerOption4.map((item,index)=>(
                            <li key={uuidv4()}><img
                            style={{ width: 20, marginTop: -5 }}
                            className="gImage"
                            src={item.personalInfo.imageUrl}
                            /></li>
                        ))}
                        </ul>
                </li>
            </ol>
        </div>
    )
}



/* 

lastInput printing once said go

with every go there will be scoring push to the backend
once we get the score from backend we will update it in the ui

what we get from backend 

    individual round scores
    wedge score


*/