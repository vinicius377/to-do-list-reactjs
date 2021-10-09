import * as C from "./App.style"
import {Form} from "./components/formulario"
import {List} from "./components/listItem"
import { useState, useEffect } from "react"
import { Itens } from "./types/itens"


const App=()=>{
  document.title="ToDo List"
  const [task,setTask]=useState<Itens[]>([])


     useEffect(()=>{
      let getTask=[...task]
      for(let i=0;i<localStorage.length;i++){
          let item=localStorage.getItem(`${localStorage.key(i)}`)
          let parse=JSON.parse(`${item}`)
          getTask.push(parse) 
      }
    setTask(getTask)
    },[setTask])
  
  
   function setLS(title:string){
    let id=localStorage.length+1
    let newtask=[...task]
    newtask.push({id,taskTitle:title,taskDescript:"",done:false})
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
        newlist.splice(id,id+1)
      } 
  })
  setTask(newlist)
}
return (
  <C.Container >
      <C.Header>
        <h1>ToDo List</h1>
      </C.Header>
      <Form onPush={setLS}/>
      {task.map(task=> 
      <List 
      id={task.id}
       taskTitle={task.taskTitle} 
       taskDescript={task.taskDescript} 
       done={task.done} 
       putDesc={putDesc}
       excluir={Excluir}/>)} 
     
   </C.Container>
  
  )
}
export default App