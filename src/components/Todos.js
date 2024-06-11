import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

export default function Todos() {


    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()

    return (
        <>
            <div>
                Todos
                {todos.map((todo) => (
                    <div>
                        <div key={todo.id} className=''>
                            {todo.text}
                        </div>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            Remove todo
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}
