import React, {useState} from 'react'
import  './App.css'

const App = () => {
    // タスクを保持するState
    const [tasks, setTasks] = useState([])
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
        setTasks(prev => [
            ...prev,
            {
                title: taskTitle
            }
        ])
    }

    // 指定したIndex番号のタスクを削除する
    const removeTask = (index) => {
        setTasks(prev => prev.filter((_, i) => i !== index))
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
                {tasks.map((task, index) => (
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