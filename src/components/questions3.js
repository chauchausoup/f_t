import React, { useEffect,useContext } from 'react'
import {Quiz3Context} from '../context/Quiz3Context'

export default function Questions() {
    const { question3} = useContext(Quiz3Context);
    const [qText3,setQuestion3] = question3;
    
    return (
        <div>
            <h3>{qText3}</h3>
        </div>
    )
}



