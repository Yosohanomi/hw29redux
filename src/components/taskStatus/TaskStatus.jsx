import { useSelector } from 'react-redux'
import styles from './TaskStatus.module.css'

export const TasksStatus = () => {
    const tasksList = useSelector((state) => state.todoManager.tasks)
    const activeTasks = tasksList.filter((task) => !task.isCompleted)
    const completedTask = tasksList.filter((task) => task.isCompleted)
    return (
        <div className={styles.thumb}>
            <h2 className={styles.title}>Tasks: {tasksList?.length}</h2>
            <p className={styles.text}>Active: {activeTasks?.length}</p>
            <p className={styles.text}>Completed: {completedTask?.length}</p>
        </div>
    )
}