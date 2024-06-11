import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

export default function Todos() {
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5">Todos</h1>
            <ul className="space-y-4">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center bg-gray-800 p-4 rounded shadow">
                        <span className="text-white">{todo.text}</span>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-red-500 hover:text-red-700"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

