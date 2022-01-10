import styles from '../styles/Envelope.module.css'

const Envelope = () => {
    return <div className={styles.container}>
        <span className={styles.background}>
            <span className={styles.front}>
                <span className={styles.stamp}>
                    <span className={styles.heart}/>
                </span>
            </span>
        </span>
        <span className={styles.background}>
            <span className={styles.back}>
                <span className={styles.heart}></span>
            </span>
        </span>
    </div>
}

export default Envelope