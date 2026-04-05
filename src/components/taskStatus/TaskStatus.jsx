import { useSelector } from 'react-redux'
import styles from './TaskStatus.module.css'

export const TasksStatus = () => {
    const tasksList = useSelector((state) => state.tasks)
    return (
        <div className={styles.thumb}>
            <h2 className={styles.title}>Tasks</h2>
            <p className={styles.text}>Active: {tasksList?.length}</p>
            <p className={styles.text}>Completed: </p>
        </div>
    )
}