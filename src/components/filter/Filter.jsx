import { Button } from "../button/Button"
import styles from './Filter.module.css'

export const Filter = () => {
    return (
        <div className={styles.thumb}>
            <h2 className={styles.title}>Filter by status</h2>
            <div className={styles.btnThumb}>
                <Button text="All"/>
                <Button text="Active"/>
                <Button text="Completed"/>
            </div>
        </div>
    )
}