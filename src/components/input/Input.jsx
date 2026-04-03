import { Button } from "../button/Button"
import styles from './Input.module.css'

export const Input = () => {
    return (
        <div className={styles.thumb}>
            <input className={styles.input} type="text" placeholder="Enter task text..."/>
            <Button text="Add task"/>
        </div>
    )
}