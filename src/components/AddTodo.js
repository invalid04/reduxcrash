import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

export default function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()

        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
            <input 
                type='text'
                className='bg-gray-800 rounded border border-gray-700 py-1 px-3'
                placeholder = 'Enter a todo...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type='submit'
                className='text-white bg-indigo-500 border-0'
            >
                Add Todo
            </button>
        </form>
    )
}
