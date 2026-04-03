import { Input } from "../../components/input/Input"
import { Filter } from "../../components/filter/Filter"
import { TasksStatus } from "../../components/taskStatus/TaskStatus"
import styles from './Homepage.module.css'
export const Homepage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.thumb}>
                <TasksStatus/>
                <Filter/>
            </div>
            <Input/>
        </div>
    )
}