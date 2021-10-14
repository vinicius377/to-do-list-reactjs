import * as C from "./App.style"
import {Form} from "./components/formulario"
import {List} from "./components/listItem"
import { useState, useEffect } from "react"
import { Itens } from "./types/itens"
import {formatData} from "./helpers/formatData"


const App=()=>{

  const [task,setTask]=useState<Itens[]>([])


     useEffect(()=>{
      let getTask=[...task]
      for(let i=0;i<localStorage.length;i++){
          let item=localStorage.getItem(`${localStorage.key(i)}`)
          let parse=JSON.parse(`${item}`)
          getTask.push(parse) 
      }
    setTask(getTask)
    },[])
  
  
   function setLS(title:string){
     let data= formatData(new Date)
    let id=localStorage.length+1
    let newtask=[...task]
    newtask.push({id,taskTitle:title,taskDescript:"",done:false,data})
    setTask(newtask)
    newtask.map(task=>{
      localStorage.setItem(id.toString(),JSON.stringify(task))
    })
}

  function putDesc(descrip:string,id:number){
    let newDescript={}

    task.forEach(valor=>{
      if(valor.id===id){
        newDescript={...valor,taskDescript:descrip}
      }
    })
     localStorage.setItem(`${id}`,JSON.stringify({...newDescript}))
}

  function Excluir(id:number){
    let newlist=[...task]
    newlist.forEach(element=>{
        if(element.id===id){
          localStorage.removeItem(`${id}`)
          newlist.splice(id-1,id)
        } 
    })
    setTask(newlist)
}

function setDone(id:number,done:boolean){
  let setDone={}

  task.forEach(valor=>{
    if(valor.id===id){
      setDone={...valor,done:!done}
    }
  })
   localStorage.setItem(`${id}`,JSON.stringify({...setDone}))
}
return (
  <C.Container >
      <C.Header>
        <h1>ToDo List</h1>
      </C.Header>
      <Form onPush={setLS}/>
      {task.map(task=> 
      <List 
        key={task.id}
        id={task.id}
       taskTitle={task.taskTitle} 
       taskDescript={task.taskDescript} 
       done={task.done} 
       putDesc={putDesc}
       excluir={Excluir}
       setDone={setDone}
       data={task.data}/>)} 
     
   </C.Container>
  
  )
}
export default App