import React, { useEffect,useContext } from 'react'
import {Quiz1Context} from '../context/Quiz1Context'

export default function Questions() {
    const { question} = useContext(Quiz1Context);
    const [qText,setQuestion] = question;
    
    return (
        <div>
            <h3>{qText}</h3>
        </div>
    )
}



