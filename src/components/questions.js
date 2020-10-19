import React, { useEffect,useContext } from 'react'
import {Quiz1Context} from '../context/Quiz1Context'

export default function Questions(props) {
    const { question} = useContext(Quiz1Context);
    const [qText,setQuestion] = question;
    
    useEffect(()=>{
        console.log(props.mode)
    },[])
    
    return (
        <div>
            <h3>{qText}</h3>
        </div>
    )
}



