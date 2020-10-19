import React, { useEffect,useContext } from 'react'
import {Quiz2Context} from '../context/Quiz2Context'

export default function Questions(props) {
    const { question2} = useContext(Quiz2Context);
    const [qText2,setQuestion2] = question2;
  
    return (
        <div>
            <h3>{qText2}</h3>
        </div>
    )
}



