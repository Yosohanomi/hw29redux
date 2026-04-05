import { Input } from "../../components/input/Input"
import { Filter } from "../../components/filter/Filter"
import { TasksStatus } from "../../components/taskStatus/TaskStatus"
import styles from './Homepage.module.css'
import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "../../app/actions/todoManagerActions"
export const Homepage = () => {

    const tasksList = useSelector((state) => state.tasks)
    const dispatcher= useDispatch()
    const handleDeleteClick = (id) => {
        dispatcher(deleteTask(id))
    }

    return (
        <div className={styles.container}>
            <div className={styles.thumb}>
                <TasksStatus/>
                <Filter/>
            </div>
            <Input/>
            <div>
                <ul>
                    {
                        tasksList?.map((task) => (
                            <li key={task.id}>
                                <p>{task.title}</p>
                                <button onClick={() => handleDeleteClick(task.id)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}