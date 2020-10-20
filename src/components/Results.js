import React from 'react'
import { useHistory } from 'react-router-dom';
import Users from './users';


export default function Results() {
    let history = useHistory();
    return (
        <div>
        <h1>Results:</h1>
            <Users/>
<hr/>
            <button onClick={()=>{
                history.push('/') 
                window.location.reload()

            }}>Play Again</button><br/>
            <button onClick={()=>{
                history.push('/');
                window.location.reload()
            }}>Store</button>

        </div>
    )
}
