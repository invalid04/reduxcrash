import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        }
    }
})