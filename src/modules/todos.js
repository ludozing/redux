const ADD = 'ADD'
const TOGGLE = 'TOGGLE'
const DELETE = 'DELETE'
let nextId = 0;

// 액션생성함수
export const addTodo = text => ({
    type: ADD,
    todo: {
        id: nextId++,
        text,
        done: false

    }
});
export const toggleTodo = id => ({
    type: TOGGLE,
    id
});
export const deleteTodo = id => ({
    type: DELETE,
    id
});

// 초기상태 지정
const initialState = [];

export default function todos (state=initialState, action) {
    switch(action.type){
        case ADD:
            return state.concat(action.todo);
        case TOGGLE:
            return state.map(todo=>todo.id===action.id? {...todo, done:!todo.done}:todo);
        case DELETE:
            return state.filter(todo=>todo.id!==action.id);
        default:
            return state;
    }
}