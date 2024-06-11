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
        <form onSubmit={addTodoHandler} className='flex items-center justify-center space-x-3 mt-12'>
            <input 
                type='text'
                className='bg-gray-800 rounded border border-gray-700 py-1 px-3 text-white focus:outline-none focus:border-indigo-500'
                placeholder='Enter a todo...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type='submit'
                className='text-white bg-indigo-500 py-1 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'
            >
                Add Todo
            </button>
        </form>
    )
}

