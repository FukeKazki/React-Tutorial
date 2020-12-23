import React, {createContext, useReducer} from 'react'

// タスクに対する処理を書く
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.task]
        case 'REMOVE_TASK':
            return state.filter((_, i) => i !== action.index)
        default:
            throw new Error()
    }
}

// コンテキストの作成
export const TaskContext = createContext({})

// コンテキストを流すプロバイダーの作成
export const TaskProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, [])

    return (
        <TaskContext.Provider value={{state, dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}