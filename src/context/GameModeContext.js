import React,{useState,createContext} from 'react';
import {uuid} from 'uuid'
export const GameModeContext = createContext();

export const GameModeProvider=(props)=>{
    const [gameMode, setGameMode] = useState(1);
   
    return(
        <GameModeContext.Provider 
            value={[gameMode,setGameMode]} 
        >
            {props.children}
        </GameModeContext.Provider>
    )
    
}
