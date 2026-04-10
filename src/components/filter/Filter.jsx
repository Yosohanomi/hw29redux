import { Button } from "../button/Button"
import styles from './Filter.module.css'

export const Filter = ({setFilter}) => {
    return (
        <div className={styles.thumb}>
            <h2 className={styles.title}>Filter by status</h2>
            <div className={styles.btnThumb}>
                <Button handleClick={() => setFilter("all")} text="All"/>
                <Button handleClick={() => setFilter("active")} text="Active"/>
                <Button handleClick={() => setFilter("completed")} text="Completed"/>
            </div>
        </div>
    )
}