import { Input } from "../../components/input/Input"
import { Filter } from "../../components/filter/Filter"
import { TasksStatus } from "../../components/taskStatus/TaskStatus"
import styles from './Homepage.module.css'
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { completedTask, deleteTask } from "../../app/reducer/todoManagerReducer"

export const Homepage = () => {

    const [filter, setFilter] = useState("all")

    const tasksList = useSelector((state) => state.todoManager.tasks)
    const dispatcher= useDispatch()
    const handleDeleteClick = (id) => {
        dispatcher(deleteTask(id))
    }

    const handleCompletedClick = (id) => {
        dispatcher(completedTask(id))
    }

    const filteredList = tasksList.filter((task) => {
            if(filter === "active") {
                return !task.isCompleted
            }
            else if(filter === "completed") {
                return task.isCompleted
            }
            else {
                return true
            }
        });

    return (
        <div className={styles.container}>
            <div className={styles.thumb}>
                <TasksStatus/>
                <Filter setFilter={setFilter}/>
            </div>
            <Input/>
            <div>
                <ul className={styles.list}>
                    {
                        filteredList?.map((task) => (
                            <li className={styles.item} key={task.id}>
                                <div className={task.isCompleted ? styles.completed : styles.active}>
                                    <p>{task.title}</p>
                                    <button className={styles.delete} onClick={() => handleDeleteClick(task.id)}></button>
                                    <button className={styles.complete} onClick={() => handleCompletedClick(task.id)}></button>
                                </div>
                                
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}