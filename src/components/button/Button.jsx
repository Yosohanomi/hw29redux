import styles from './Button.module.css'

export const Button = ({text, handleClick}) => {
    return (
        <>
            <button onClick={handleClick} type="button" className={styles.btn}>{text}</button>
        </>
    )
}