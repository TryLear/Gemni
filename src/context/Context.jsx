import { createContext, useState } from "react";
import runChat from "../config/gemni";

export const Context=createContext();
const ContextProvider=(props)=>{
    const [input,setInput]=useState('')
    const [recent,setRecent]=useState('')
    const [prev,setPrev]=useState([])
    const [showResult,setShowResult]=useState(false)
    const [loadind,setLoading]=useState(false)
    const [resultData,setResultData]=useState('')
    const newChat=()=>{
        setLoading(false);
        setShowResult(false)
    }

    const onSet= async(prompt)=>{
        setResultData('')
        setLoading(true)
        setShowResult(true)
        setRecent(input)
        setPrev(prev=>[...prev,input])
      const response = await runChat(input)
      setResultData(response)
      setLoading(false);
      setInput("")

    }
    

    const contextValue={
        prev,
        setPrev,
        onSet,
        setRecent,
        recent,
        showResult,
        loadind,
        resultData,
        input,
        setInput,
        newChat

    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider