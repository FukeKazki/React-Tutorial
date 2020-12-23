import React, {useState, useContext} from 'react'
import './App.css'

import {TaskContext} from './context/Task'


const App = () => {
    // タスクを保持するContext
    const {state, dispatch} = useContext(TaskContext)

    // 入力された文字を保持するState
    const [taskTitle, setTaskTitle] = useState('')

    // 文字が入力されるたびに呼ばれる
    const handleTaskTitle = (e) => {
        setTaskTitle(e.target.value)
    }

    // 入力した文字を空にする
    const resetTaskTitle = () => {
        setTaskTitle('')
    }

    // 入力された文字をタスクに追加する
    const addTask = () => {
        dispatch({
            type: 'ADD_TASK',
            task: {
                title: taskTitle,
            },
        })
    }

    // 指定したIndex番号のタスクを削除する
    const removeTask = (index) => {
        dispatch({
            type: 'REMOVE_TASK',
            index: index,
        })
    }

    // 追加ボタンを押したときに呼ばれる
    const handleAddButton = () => {
        addTask()
        resetTaskTitle()
    }

    // 削除ボタンを押したときに呼ばれる
    const handleRemoveButton = (index) => {
        removeTask(index)
    }

    return (
        <>
            {/* 入力フォーム */}
            <div className='form'>
                <label>タスク名: </label>
                <input onChange={handleTaskTitle} value={taskTitle}/>
                <button onClick={handleAddButton}>追加する</button>
            </div>

            {/* タスクリスト */}
            <div className='task-list'>
                {/* 配列の中身の数だけ繰り返す */}
                {state.map((task, index) => (
                    <div key={task.title} className='task'>
                        <h3>{task.title}</h3>
                        <button onClick={() => handleRemoveButton(index)}>削除</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default App