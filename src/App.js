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

    // ボタンを押したときに呼ばれる
    const handleAddButton = () => {
        addTask()
        resetTaskTitle()
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
                {tasks.map(task => (
                    <div key={task.title} className='task'>
                        <h3>{task.title}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default App