function Lists({todos, onDelete}){
  return(
    <ul>
      {todos.map(li=>{
        return <li key={li.id}>{li.todo}<button onClick={()=>onDelete(li.id)}>X</button></li>
      })}
    </ul>
  )
}
export default Lists;