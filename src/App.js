import Header from './components/Header';
import Lists from './components/Lists';
import { useRef, useReducer } from 'react';
import './App.css';

const initialState = {
  input: '',
  todos: [
    {id:1, todo:"공부"},
    {id:2, todo:"영화감상"}
  ]
}
function reducer(state, action){
  switch(action.type){
    case 'CHANGE_INPUT':
      return{
        ...state,
        input: action.value
      };
    case 'PUSH_TODO':
      return{
        input: state.input,
        todos: [
          ...state.todos,
          action.todo
        ]
      };
    case 'REMOVE_TODO':
      return{
        input: state.input,
        todos: state.todos.filter(tod=>{
            return tod.id !== action.id
          })
      }
    default:
      return state;
  }
}

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const {input, todos} = state;
  const nextId = useRef(3);

  function onChange(e){
    const {name, value} = e.target
    dispatch({
      type: 'CHANGE_INPUT',
      name: name,
      value: value
    })
    console.log(name, value)
  }
  function onSubmit(){
    dispatch({
      type: 'PUSH_TODO',
      todo: {
        id: nextId.current,
        todo: input
      }
    })
    nextId.current = nextId.current + 1;
  }
  function onDelete(id){
    dispatch({
      type: 'REMOVE_TODO',
      id: id
    })
    nextId.current = nextId.current - 1;
  }

  return (
    <div className="App">
      <Header input={input} onChange={onChange} onSubmit={onSubmit} />
      <Lists todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
