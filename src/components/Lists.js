function Lists({todos, onRemove, onToggle}){
  return(
    <div className="todos">
      <ul>
        {todos.map(todo=>{
          return <li key={todo.id} onClick={()=>onToggle(todo.id)}><p style={{textDecoration: todo.done? 'line-through':'none'}}>{todo.todo}</p><button onClick={()=>onRemove(todo.id)}>X</button></li>
        })}
      </ul>
    </div>
  )
}
export default Lists;