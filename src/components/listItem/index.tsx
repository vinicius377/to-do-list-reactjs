import * as C from "./style"
import {useState} from "react"


type Props={
        id:number
        taskTitle:string
        taskDescript:string
        done:boolean
        putDesc:(des:string,id:number)=>void
        excluir:(id:number)=>void
}

export const List=({id,taskTitle,taskDescript,done,putDesc,excluir}:Props)=>{
    const [desc,setDesc]=useState(true)
    const [edit,setEdit]=useState(false)
    const [isCheckd,setCheck]=useState(done)
    const [descri,setDescri]=useState("")

    let editar:string="editar"
    if(edit===true){
        editar="concluir"
    }
    return(
        
        <C.Container  edit={edit} done={desc}check={isCheckd}>
      
            <div className="title" onClick={()=>setCheck(!isCheckd)} id="check">
            <span onClick={(e)=>{setDesc(!desc);e.stopPropagation()}}> 🡩</span>
                <label htmlFor="check">{taskTitle}</label>
            </div>
       
        <div className="description">
                <textarea disabled={!edit} onChange={event=>setDescri(event.target.value)}>{taskDescript}</textarea>
                <div>
                    <button type="button" onClick={()=>{setEdit(!edit); if(edit)putDesc(descri,id)}}>{editar}</button>
                    <button type="button" onClick={()=>excluir(id)}>excluir</button>
                </div>
            </div>
        </C.Container>
    )
}