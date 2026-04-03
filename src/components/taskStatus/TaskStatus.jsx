import styles from './TaskStatus.module.css'

export const TasksStatus = () => {
    return (
        <div className={styles.thumb}>
            <h2 className={styles.title}>Tasks</h2>
            <p className={styles.text}>Active: </p>
            <p className={styles.text}>Completed: </p>
        </div>
    )
}