import React from 'react';
import Header from '../components/Header';
import Lists from '../components/Lists';
import { addTodo, toggleTodo, deleteTodo } from '../modules/todos';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';

const TodolistContainer = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    const onCreate = text => dispatch(addTodo(text));
    const onToggle = id => dispatch(toggleTodo(id));
    const onRemove = id => dispatch(deleteTodo(id));
    return (
        <div>
            <Header todos={todos} onCreate={onCreate} />
            <Lists todos={todos} onToggle={onToggle} onRemove={onRemove} />
        </div>
    );
};

export default TodolistContainer;