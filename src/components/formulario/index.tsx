import * as C from "./style"
import {useState} from "react"

type Props={
    onPush:(taskTitle:string)=>void
}
 export const Form=({onPush}:Props)=>{
    const [title,setTitle]=useState("")
    
    function addTask(){
       if(title!==""){
            onPush(title); 
       } else{
           alert("por favor escreva algum titulo")
       }
        setTitle("")
    }
    return (
            <C.Form>
                <button type="button" onClick={()=>addTask()}>➕</button>
                <input type="text" placeholder="Digite uma nova task" 
                onChange={event=>setTitle(event.target.value)} value={title}/>
            </C.Form> 
    )
}
export default Form