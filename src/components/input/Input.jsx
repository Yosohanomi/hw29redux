import { useState } from "react"
import { Button } from "../button/Button"
import styles from './Input.module.css'
import { useDispatch } from "react-redux"
import { addTask } from "../../app/actions/todoManagerActions"

export const Input = () => {
    const [inputInfo, setInputInfo] = useState("")
    const handleChange = (e) => {
        setInputInfo(e.target.value)
    }
    const dispatcher = useDispatch()
    const handleClick = () => {
        dispatcher(addTask({title: inputInfo, id: Date.now()}))
    }
    return (
        <div className={styles.thumb}>
            <input onChange={handleChange} value={inputInfo} className={styles.input} type="text" placeholder="Enter task text..."/>
            <Button text="Add task" handleClick={handleChange}/>
        </div>
    )
}