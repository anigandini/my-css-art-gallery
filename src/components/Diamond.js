import styles from '../styles/Diamond.module.css'

const Diamond = () => {
    return <div className={styles.container}>
        <div className={styles.diamond}>
            <span className={styles.topLeft}><span className={styles.topLeftChild} /></span>
            <span className={styles.topRigth}><span className={styles.topRightChild} /></span>
            <span className={styles.bottomLeft}><span className={styles.bottomLeftChild}/></span>
            <span className={styles.bottomRight}><span className={styles.bottomRightChild} /></span>
        </div>
        <div className={styles.ring}><span/></div>

    </div>
}

export default Diamond